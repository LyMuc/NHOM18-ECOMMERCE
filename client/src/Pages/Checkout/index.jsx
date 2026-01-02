import React, { useContext, useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MyContext } from '../../App';
import { FaPlus } from "react-icons/fa6";
import Radio from '@mui/material/Radio';
import { deleteData, postData } from "../../utils/api";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const VITE_APP_PAYPAL_CLIENT_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID;
const VITE_API_URL = import.meta.env.VITE_API_URL;

const Checkout = () => {

  const [userData, setUserData] = useState(null);
  const [isChecked, setIsChecked] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsloading] = useState(false);
  const [isPaypalReady, setIsPaypalReady] = useState(false);
  const paypalContainerRef = useRef(null);
  
  // Use refs to always have latest values in PayPal callbacks
  const userIdRef = useRef(null);
  const totalAmountRef = useRef(0);
  const selectedAddressRef = useRef("");
  const cartDataRef = useRef([]);
  
  const context = useContext(MyContext);

  const history = useNavigate();

  // Keep refs updated with latest values
  useEffect(() => {
    userIdRef.current = context?.userData?._id;
    cartDataRef.current = context?.cartData;
  }, [context?.userData?._id, context?.cartData]);

  useEffect(() => {
    totalAmountRef.current = totalAmount;
  }, [totalAmount]);

  useEffect(() => {
    selectedAddressRef.current = selectedAddress;
  }, [selectedAddress]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setUserData(context?.userData)
    if (context?.userData?.address_details?.[0]?._id) {
      setSelectedAddress(context?.userData?.address_details[0]?._id);
    }
  }, [context?.userData])


  // Tính totalAmount - đảm bảo là số, không phải string
  useEffect(() => {
    const total = context.cartData?.length !== 0 ?
      context.cartData?.map(item => parseInt(item.price) * item.quantity)
        .reduce((total, value) => total + value, 0) : 0;
    
    setTotalAmount(total);
  }, [context.cartData])


  // Load PayPal Script
  useEffect(() => {
    // Check if PayPal is already loaded
    if (window.paypal) {
      setIsPaypalReady(true);
      return;
    }
    
    const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
    if (existingScript) {
      // Script exists but PayPal might not be ready yet
      const checkPaypal = setInterval(() => {
        if (window.paypal) {
          clearInterval(checkPaypal);
          setIsPaypalReady(true);
        }
      }, 100);
      
      // Timeout after 10 seconds
      setTimeout(() => clearInterval(checkPaypal), 10000);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${VITE_APP_PAYPAL_CLIENT_ID}&currency=USD&disable-funding=card`;
    script.async = true;
    script.onload = () => {
      setIsPaypalReady(true);
    };
    script.onerror = () => {
      console.error("Failed to load PayPal SDK");
    };
    document.body.appendChild(script);
  }, []);


  // Render PayPal Button
  useEffect(() => {
    if (!isPaypalReady || !window.paypal) return;
    
    const container = paypalContainerRef.current;
    if (!container) return;
    
    // Clear existing buttons
    container.innerHTML = "";

    const alertBox = context.alertBox;
    const getCartItems = context?.getCartItems;

    window.paypal
      .Buttons({
        createOrder: async () => {
          // Get latest values from refs at the time of click
          const currentUserId = userIdRef.current;
          const currentTotalAmount = totalAmountRef.current;
          
          try {
            // Validate data before sending
            if (!currentUserId) {
              throw new Error("Please login to continue");
            }
            if (!currentTotalAmount || currentTotalAmount <= 0) {
              throw new Error("Your cart is empty");
            }

            const response = await axios.get(
              VITE_API_URL + `/api/order/create-order-paypal?userId=${currentUserId}&totalAmount=${currentTotalAmount}`, 
              { withCredentials: true }
            );

            if (!response?.data?.id) {
              throw new Error("Failed to create PayPal order");
            }

            return response.data.id;
          } catch (error) {
            console.error("PayPal createOrder error:", error);
            alertBox("error", error.message || "Failed to create PayPal order. Please try again.");
            throw error;
          }
        },
        onApprove: async (data) => {
          // Get latest values from refs
          const currentUserId = userIdRef.current;
          const currentTotalAmount = totalAmountRef.current;
          const currentSelectedAddress = selectedAddressRef.current;
          const currentCartData = cartDataRef.current;
          
          const info = {
            userId: currentUserId,
            products: currentCartData,
            payment_status: "COMPLETE",
            delivery_address: currentSelectedAddress,
            totalAmount: currentTotalAmount,
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })
          };

          try {
            const res = await axios.post(
              VITE_API_URL + "/api/order/capture-order-paypal",
              {
                ...info,
                paymentId: data.orderID
              }, 
              { withCredentials: true }
            );
            
            alertBox("success", res?.data?.message || "Payment successful!");
            
            await deleteData(`/api/cart/emptyCart/${currentUserId}`);
            getCartItems?.();
            
            history("/order/success");
          } catch (err) {
            console.error("Capture order error:", err);
            alertBox("error", "Payment capture failed");
            history("/order/failed");
          }
        },
        onError: (err) => {
          console.error("PayPal Checkout onError:", err);
          alertBox("error", "Payment failed. Please try again.");
        },
        onCancel: () => {
          alertBox("info", "Payment cancelled");
        }
      })
      .render(container)
      .catch(err => {
        console.error("PayPal render error:", err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaypalReady]);



  const editAddress = (id) => {
    context?.setOpenAddressPanel(true);
    context?.setAddressMode("edit");
    context?.setAddressId(id);
  }


  const handleChange = (e, index) => {
    if (e.target.checked) {
      setIsChecked(index);
      setSelectedAddress(e.target.value)
    }
  }

  const cashOnDelivery = () => {

    const user = context?.userData
    setIsloading(true);

    if (userData?.address_details?.length !== 0) {
      const payLoad = {
        userId: user?._id,
        products: context?.cartData,
        paymentId: '',
        payment_status: "CASH ON DELIVERY",
        delivery_address: selectedAddress,
        totalAmt: totalAmount,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })
      };


      postData(`/api/order/create`, payLoad).then((res) => {
        context.alertBox("success", res?.message);

        if (res?.error === false) {
          deleteData(`/api/cart/emptyCart/${user?._id}`).then(() => {
            context?.getCartItems();
            setIsloading(false);
          })
        } else {
          context.alertBox("error", res?.message);
        }
        history("/order/success");
      });
    } else {
      context.alertBox("error", "Please add address");
      setIsloading(false);
    }



  }

  return (
    <section className="checkoutPage py-3 lg:py-10 px-3">
      <div className="w-full lg:w-[70%] m-auto flex flex-col md:flex-row gap-5">
          <div className="leftCol w-full md:w-[60%]">
            <div className="card bg-white shadow-md p-5 rounded-md w-full">
              <div className="flex items-center justify-between">
                <h2>Select Delivery Address</h2>
                {
                  userData?.address_details?.length !== 0 &&
                  <Button variant="outlined"
                    onClick={() => {
                      context?.setOpenAddressPanel(true);
                      context?.setAddressMode("add");
                    }} className="btn">
                    <FaPlus />
                    ADD {context?.windowWidth< 767 ? '' : 'NEW ADDRESS'}
                  </Button>
                }

              </div>

              <br />

              <div className="flex flex-col gap-4">


                {
                  userData?.address_details?.length !== 0 ? userData?.address_details?.map((address, index) => {

                    return (
                      <label className={`flex gap-3 p-4 border border-[rgba(0,0,0,0.1)] rounded-md relative ${isChecked === index && 'bg-[#fff2f2]'}`} key={index}>
                        <div>
                          <Radio size="small" onChange={(e) => handleChange(e, index)}
                            checked={isChecked === index} value={address?._id} />
                        </div>
                        <div className="info">
                          <span className="inline-block text-[13px] font-[500] p-1 bg-[#f1f1f1] rounded-md">{address?.addressType}</span>
                          <h3>{userData?.name}</h3>
                          <p className="mt-0 mb-0">
                            {address?.address_line1 + " " + address?.city + " " + address?.country + " " + address?.state + " " + address?.landmark + ' ' + '+ ' + address?.mobile}
                          </p>

   
                          <p className="mb-0 font-[500]">{userData?.mobile !== null ? '+'+userData?.mobile : '+'+address?.mobile}</p>
                        </div>

                        <Button variant="text" className="!absolute top-[15px] right-[15px]" size="small"
                          onClick={() => editAddress(address?._id)}
                        >EDIT</Button>

                      </label>
                    )
                  })

                    :


                    <>
                      <div className="flex items-center mt-5 justify-between flex-col p-5">
                        <img src="/map.png" width="100" />
                        <h2 className="text-center">No Addresses found in your account!</h2>
                        <p className="mt-0">Add a delivery address.</p>
                        <Button className="btn-org" 
                        onClick={() => {
                          context?.setOpenAddressPanel(true);
                          context?.setAddressMode("add");
                        }}>ADD ADDRESS</Button>
                      </div>
                    </>

                }

              </div>


            </div>
          </div>

          <div className="rightCol w-full  md:w-[40%]">
            <div className="card shadow-md bg-white p-5 rounded-md">
              <h2 className="mb-4">Your Order</h2>

              <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                <span className="text-[14px] font-[600]">Product</span>
                <span className="text-[14px] font-[600]">Subtotal</span>
              </div>

              <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">

                {
                  context?.cartData?.length !== 0 && context?.cartData?.map((item, index) => {
                    return (
                      <div className="flex items-center justify-between py-2" key={index}>
                        <div className="part1 flex items-center gap-3">
                          <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img
                              src={item?.image}
                              className="w-full transition-all group-hover:scale-105"
                            />
                          </div>

                          <div className="info">
                            <h4 className="text-[14px]" title={item?.productTitle}>{item?.productTitle?.substr(0, 20) + '...'} </h4>
                            <span className="text-[13px]">Qty : {item?.quantity}</span>
                          </div>
                        </div>

                        <span className="text-[14px] font-[500]">{(item?.quantity * item?.price)?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                      </div>
                    )
                  })
                }



              </div>

              <div className="flex items-center flex-col gap-3 mb-2">
                <div 
                  ref={paypalContainerRef}
                  id="paypal-button-container" 
                  className={`w-full ${userData?.address_details?.length === 0 ? 'pointer-events-none opacity-50' : ''}`}
                  style={{ minHeight: '45px' }}
                ></div>

                <Button type="button" className="btn-dark btn-lg w-full flex gap-2 items-center" onClick={cashOnDelivery}>
                  {
                    isLoading === true ? <CircularProgress /> :
                      <>
                        <BsFillBagCheckFill className="text-[20px]" />
                        Cash on Delivery
                      </>
                  }
                </Button>
              </div>

            </div>
          </div>
        </div>
    </section>
  );
};

export default Checkout;
