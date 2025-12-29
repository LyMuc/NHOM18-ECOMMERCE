import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { createContext } from "react";

import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx'
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Cart from "./Pages/Cart";
import MyAccount from "./Pages/MyAccount";
import EditAddress from "./Pages/Addresses/Edit";

import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Wishlist from "./Pages/Wishlist";
import Checkout from "./Pages/Checkout";
import Verify from "./Pages/Verify";
import ForgotPassword from "./Pages/ForgotPassword"; // Thêm import
import Footer from "./components/Footer/index.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { fetchDataFromApi, getData } from "./utils/api.js";
import Address from "./Pages/MyAccount/address";

const MyContext = createContext();

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [openAddressPanel, setOpenAddressPanel] = useState(false);
  const [addressMode, setAddressMode] = useState("add");  // "add" or "edit"
  const [addressId, setAddressId] = useState("");

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
          //getCartItems();
          //getMyListData();
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

  const toggleAddressPanel = (newOpen) => () => {
    if (newOpen == false) {
      setAddressMode("add");
    }

    setOpenAddressPanel(newOpen);
  };

  const values = {
   alertBox, 
   isLogin, 
   setIsLogin,
   userData,
   setUserData, 
   getUserDetails, 
   openAddressPanel,
  setOpenAddressPanel,
  addressMode,
  setAddressMode,
  addressId,
  setAddressId,
  toggleAddressPanel, 
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header></Header>
          <Routes>
            <Route path="/" exact={true} element={<Home/>}/>
            <Route path="/productDetail" exact={true} element={<ProductDetail/>}/>
            <Route path="/login" exact={true} element={<Login/>}/>
            <Route path="/signup" exact={true} element={<SignUp/>}/>
            <Route path="/forgot-password" exact={true} element={<ForgotPassword/>}/> {/* Thêm route */}
            <Route path="/about_us" exact={true} element={<AboutUs/>}/>
            <Route path="/cart" exact={true} element={<Cart/>}/>
            <Route path="/my-account" exact={true} element={<MyAccount/>}/>
            <Route path={"/address"} exact={true} element={<Address />} />
            <Route path="/contact_us" exact={true} element={<ContactUs/>}/>
            <Route path="/wishlist" exact={true} element={<Wishlist/>}/>
            <Route path="/checkout" exact={true} element={<Checkout/>}/>
            <Route path="/verify" exact={true} element={<Verify/>}/>
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster/>
    </>

  )
}

export default App;

export { MyContext };
