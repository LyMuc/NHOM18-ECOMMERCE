import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductDetail from './pages/ProductDetail'
// import './App.css'
import ContactUs from './contact_us.jsx'
import Login from './login.jsx'
import SignUp from './sign_up.jsx'
import AboutUs from './about_us.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" exact={true} element={<Home/>}/>
            <Route path="/productDetail" exact={true} element={<ProductDetail/>}/>
            <Route path="/about_us" exact={true} element={<AboutUs/>}/>
            <Route path="/contact_us" exact={true} element={<ContactUs/>}/>
            <Route path="/login" exact={true} element={<Login/>}/>
            <Route path="/sign_up" exact={true} element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
