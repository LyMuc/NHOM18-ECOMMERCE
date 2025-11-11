import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';

const ProductItem = () => {
    return(
       <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
            <div className="imgWrapper group w-[100%] overflow-hidden rounded-md relative">
                <Link to={"/"}>
                    <div className="img h-[220px]">
                        <img src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg" className="w-full" alt="Product" />
                        <img src="https://serviceapi.spicezgold.com/download/1742462212410_ascscscscccswefsdvdd3.jpg" 
                        className="w-full absolute transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 top-0 left-0" alt="Product" />
                    </div>
                </Link>
                <span className="discount absolute flex items-center top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg text-[12px] font-[500] p-1">-20%</span>

                <div className="actions flex items-center flex-col absolute top-[-200px] right-[3px] z-50 gap-3 w-[50px] transition-all duration-300 group-hover:top-[15px]
                opacity-0 group-hover:opacity-100">
                        <Button 
                            sx={{
                                width: '35px',
                                height: '35px',
                                minWidth: '35px',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: '#ff5252',
                                    color: 'white'
                                }
                            }}
                            className="group"
                        > 
                            <FaRegHeart className="text-[18px]"/> 
                        </Button>
                        <Button 
                            sx={{
                                width: '35px',
                                height: '35px',
                                minWidth: '35px',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                color: 'black',
                                '&:hover': {
                                    backgroundColor: '#ff5252',
                                    color: 'white'
                                }
                            }}
                            className="group"
                        > 
                            <MdZoomOutMap className="text-[18px]"/> 
                        </Button>
                </div>
            </div>

            <div className="info p-3 bg-[#f1f1f1] py-5">
                <h6 className="text-[13px]">
                    <Link to={"/"} className="link transition-all">
                        Khai Silk
                    </Link>
                </h6>
                <h3 className="text-[14px] mt-1 mb-2 font-[500] title text-[#000]">
                    <Link to={"/"} className="link transition-all">
                        Co An Do
                    </Link>
                </h3>
                <Rating name="size-small" defaultValue={2} size="small" readOnly/>
                <div className="flex items-center gap-3">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">$100.00</span>
                    <span className="price text-[#ff5252] text-[15px] font-[600]">$58.00</span>
                </div>
            </div>
       </div>
    )
}

export default ProductItem;