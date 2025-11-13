import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" exact={true} element={<Home/>}/>
            <Route path="/productDetail" exact={true} element={<ProductDetail/>}/>
            <Route path="/login" exact={true} element={<Login/>}/>
            <Route path="/signup" exact={true} element={<SignUp/>}/>
            <Route path="/about_us" exact={true} element={<AboutUs/>}/>
            <Route path="/cart" exact={true} element={<Cart/>}/>
            <Route path="/my_account" exact={true} element={<MyAccount/>}/>
            <Route path="/addresses/new" exact={true} element={<EditAddress/>}/>
            <Route path="/addresses/edit/:id" exact={true} element={<EditAddress/>}/>
            <Route path="/contact_us" exact={true} element={<ContactUs/>}/>
            <Route path="/wishlist" exact={true} element={<Wishlist/>}/>
            <Route path="/checkout" exact={true} element={<Checkout/>}/>
          </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
