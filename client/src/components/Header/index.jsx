import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { postData } from "../../utils/api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
    const context = useContext(MyContext);
    const history = useNavigate();

    const handleLogout = async () => {
        // Gọi API logout để xóa cookie
        const res = await postData("/api/users/logout", {});
        
        if (res?.error === false) {
            context.setIsLogin(false);
            context.setUserData(null);
            context.alertBox("success", "Logged out successfully");
            history("/login");
        }
    };

   return (
    <>
        <header className="bg-white">
            <div className="top-strip py-2 ">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]">
                                Get up to 50% off new season styles, limited time only
                            </p>
                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-3">
                                <li className="list-none">
                                    <Link to="/order-tracking" className="text-[13px] link font-[500] transition"> Track Order </Link>
                                </li>

                                <li className="list-none">
                                    <Link to="/help-center" className="text-[13px] link font-[500] transition"> Help Center </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header py-4 top-strip">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[25%]">
                        <Link to="/"><img src="/logo.png"></img></Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search/>
                    </div>
                    <div className="col3 w-[30%] flex items-center pl-7">
                        <ul className="flex items-center justify-end gap-3 w-full">
                            
                            {/* Logic hiển thị tên người dùng hoặc Login/Register */}
                            <li className="list-none">
                                {context.isLogin ? (
                                    <div className="flex items-center gap-2">
                                        <span className="text-[15px] font-[600] text-gray-800">
                                            Welcome, {context.userData?.name || "User"}
                                        </span>
                                        <span className="text-gray-400">|</span>
                                        <Link to="/my_account" className="link transition text-[14px] font-[500]">
                                            My Account
                                        </Link>
                                        <span className="text-gray-400">|</span>
                                        <button 
                                            onClick={handleLogout} 
                                            className="link transition text-[14px] font-[500] hover:text-red-500"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <Link to={"/login"} className="link transition text-[15px] font-[500]">Login</Link> |&nbsp; 
                                        <Link to={"/signup"} className="link transition text-[15px] font-[500]">Register</Link>
                                    </>
                                )}
                            </li>

                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                                
                            </li>

                            <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>   
                            </li>

                            <li>
                                <Tooltip title="Favorite">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                        </IconButton>
                                </Tooltip>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

            <Navigation/>
            
        </header>
    </>
  )
}

export default Header;