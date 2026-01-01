import { HashRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { createContext } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import { ProductDetails } from "./Pages/ProductDetails";

import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import CartPage from "./Pages/Cart";  
import Verify from "./Pages/Verify";
import ForgotPassword from "./Pages/ForgotPassword"; 
import Checkout from "./Pages/Checkout";
import MyAccount from "./Pages/MyAccount";
import MyList from "./Pages/MyList";
import Orders from "./Pages/Orders";

import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Address from "./Pages/MyAccount/address";
import { OrderSuccess } from "./Pages/Orders/success";
import { OrderFailed } from "./Pages/Orders/failed";
import SearchPage from "./Pages/Search";

import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Wishlist from "./Pages/Wishlist";

import { useEffect } from "react";
import { useState } from "react";
import { fetchDataFromApi, getData, postData } from "./utils/api.js";

const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState({
    open: false,
    item: {}
  });
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [catData, setCatData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [myListData, setMyListData] = useState([]);

  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openAddressPanel, setOpenAddressPanel] = useState(false);

  const [addressMode, setAddressMode] = useState("add");
  const [addressId, setAddressId] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [openFilter, setOpenFilter] = useState(false);
  const [isFilterBtnShow, setisFilterBtnShow] = useState(false);

  const [openSearchPanel, setOpenSearchPanel] = useState(false);

  const handleOpenProductDetailsModal = (status, item) => {
    setOpenProductDetailsModal({
      open: status,
      item: item
    });
  }

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal({
      open: false,
      item: {}
    });
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const toggleAddressPanel = (newOpen) => () => {
    if (newOpen == false) {
      setAddressMode("add");
    }

    setOpenAddressPanel(newOpen);
  };

  const alertBox = (type, msg) => {
    if (type === "success") {
      toast.success(msg)
    }
    if (type === "error") {
      toast.error(msg)
    }
  }
  
  // Kiểm tra authentication từ cookie
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getData("/api/users/check-auth");
        
        if (res?.error === false) {
          console.log("Da dang nhap");

          setIsLogin(true);
          getCartItems();
          getMyListData();
          getUserDetails(); 
          
        } else {
          console.log("Chua dang nhap");
          setIsLogin(false);
          setUserData(null);
        }
      } catch (error) {
        console.log("Chua dang nhap: ", error);
        setIsLogin(false);
        setUserData(null);
      }
    };

    checkAuth();
  }, [])

  // Function lấy thông tin user
  const getUserDetails = () => {
    fetchDataFromApi(`/api/users/user-details`).then((res) => {
      if (res?.error === false) {
        setUserData(res.data);  // Lưu vào context
      } else {
        // Session hết hạn hoặc không hợp lệ
        if (res?.message === "You have not login" || res?.message === "Unauthorized access") {
          alertBox("error", "Your session has expired. Please login again");
          setIsLogin(false);
          setUserData(null);
        }
      }
    })
  }

  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      if (res?.error === false) {
        setCatData(res?.data);
      }
    })

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  const addToCart = (product, userId, quantity) => {

    if (userId === undefined) {
      alertBox("error", "you are not login please login first");
      return false;
    }

    const data = {
      productTitle: product?.name,
      image: product?.image,
      rating: product?.rating,
      price: product?.price,
      oldPrice: product?.oldPrice,
      discount: product?.discount,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      countInStock: product?.countInStock,
      brand: product?.brand,
      size: product?.size,
      weight: product?.weight,
      ram: product?.ram
    }


    postData("/api/cart/add", data).then((res) => {
      if (res?.error === false) {
        alertBox("success", res?.message);

        getCartItems();


      } else {
        alertBox("error", res?.message);
      }

    })


  }

  const getCartItems = () => {
    fetchDataFromApi(`/api/cart/get`).then((res) => {
      if (res?.error === false) {
        setCartData(res?.data);
      }
    })
  }



  const getMyListData = () => {
    fetchDataFromApi("/api/myList").then((res) => {
      if (res?.error === false) {
        setMyListData(res?.data)
      }
    })
  }

  const values = {
    openProductDetailsModal,
    setOpenProductDetailsModal,
    handleOpenProductDetailsModal,
    handleCloseProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    setOpenAddressPanel,
    toggleAddressPanel,
    openAddressPanel,
    isLogin,
    setIsLogin,
    alertBox,
    setUserData,
    userData,
    setCatData,
    catData,
    addToCart,
    cartData,
    setCartData,
    getCartItems,
    myListData,
    setMyListData,
    getMyListData,
    getUserDetails,
    setAddressMode,
    addressMode,
    addressId,
    setAddressId,
    setSearchData,
    searchData,
    windowWidth,
    setOpenFilter,
    openFilter,
    setisFilterBtnShow,
    isFilterBtnShow,
    setOpenSearchPanel,
    openSearchPanel
  };

  return (
    <>
      <HashRouter>
        <MyContext.Provider value={values}>
          <Header></Header>
          <Routes>
            <Route path="/" exact={true} element={<Home/>}/>
            {/* <Route path="/productDetail" exact={true} element={<ProductDetail/>}/> */}
            <Route
              path={"/products"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path="/login" exact={true} element={<Login/>}/>
            <Route path="/register" exact={true} element={<SignUp/>}/>
            <Route path="/forgot-password" exact={true} element={<ForgotPassword/>}/> {/* Thêm route */}
            <Route path="/about_us" exact={true} element={<AboutUs/>}/>
            <Route path="/cart" exact={true} element={<CartPage/>}/>
            <Route path="/my-account" exact={true} element={<MyAccount/>}/>
            <Route path={"/address"} exact={true} element={<Address />} />
            <Route path="/contact_us" exact={true} element={<ContactUs/>}/>
            <Route path="/wishlist" exact={true} element={<Wishlist/>}/>
            <Route path="/checkout" exact={true} element={<Checkout/>}/>
            <Route path="/verify" exact={true} element={<Verify/>}/>
            <Route path={"/checkout"} exact={true} element={<Checkout />} />
            <Route path={"/my-list"} exact={true} element={<MyList />} />
            <Route path={"/my-orders"} exact={true} element={<Orders />} />
            <Route path={"/order/success"} exact={true} element={<OrderSuccess />} />
            <Route path={"/order/failed"} exact={true} element={<OrderFailed />} />
            <Route path={"/search"} exact={true} element={<SearchPage />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </HashRouter>

      <Toaster/>
    </>

  )
}

export default App;

export { MyContext };
