import React, { useState } from "react";
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";


const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }

    return(
        <>
            <nav className="py-2">
                <div className="container flex items-center justify-between gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className="!text-black gap-2 w-full" onClick={openCategoryPanel}> 
                            <RiMenu2Fill className="text-[18px]"/>Shop By Categories 
                            <LiaAngleDownSolid className="text-[13px] ml-auto font-bold cursor-pointer"/>
                        </Button>
                    </div>

                    <div className="col_2 w-[60%]">
                        <ul className="flex items-center gap-3 nav">
                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                    hover:!text-[#ff5252]">
                                        Home
                                    </Button>
                                </Link>
                            </li>

                             <li className="list-none relative">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Fashion
                                    </Button>
                                </Link>

                                <div className="submenu absolute top-[120%] left-[0%] bg-white shadow-md min-w-[150px] opacity-0 transition-all">
                                    <ul>
                                        <Link to={"/"} className="w-full">
                                            <li className="list-none w-full relative">
                                                <Button className="w-full !text-left !justify-start !rounded-none">Men</Button>
                                                 <div className="submenu absolute top-[0%] left-[100%] bg-white shadow-md min-w-[150px] opacity-0 transition-all">
                                                    <ul>
                                                        <Link to={"/"} className="w-full">
                                                            <li className="list-none w-full relative">
                                                                <Button className=" w-full !text-left !justify-start !rounded-none">Men</Button>
                                                                
                                                            </li>
                                                        </Link>
                                                        <Link to={"/"} className="w-full">
                                                            <li className="list-none w-full">
                                                                <Button className=" w-full !text-left !justify-start !rounded-none">Women</Button>
                                                            </li>
                                                        </Link>
                                                        <Link to={"/"} className="w-full">
                                                            <li className="list-none w-full">
                                                                <Button className=" w-full !text-left !justify-start !rounded-none">Kids</Button>
                                                            </li>
                                                        </Link>
                                                        <Link to={"/"} className="w-full">
                                                            <li className="list-none w-full">
                                                                <Button className=" w-full !text-left !justify-start !rounded-none">Girls</Button>
                                                            </li>
                                                        </Link>
                                                        <Link to={"/"} className="w-full">
                                                            <li className="list-none w-full">
                                                                <Button className=" w-full !text-left !justify-start !rounded-none">Boys</Button>
                                                            </li>    
                                                        </Link>                                                                 
                                                    </ul>

                                                </div>
                                            </li>
                                        </Link>
                                        <Link to={"/"} className="w-full">
                                            <li className="list-none w-full">
                                                <Button className="w-full !text-left !justify-start !rounded-none">Women</Button>
                                            </li>
                                        </Link>
                                        <Link to={"/"} className="w-full">
                                            <li className="list-none w-full">
                                                <Button className="w-full !text-left !justify-start !rounded-none">Kids</Button>
                                            </li>
                                        </Link>
                                        <Link to={"/"} className="w-full">
                                            <li className="list-none w-full">
                                                <Button className="w-full !text-left !justify-start !rounded-none">Girls</Button>
                                            </li>
                                        </Link>
                                        <Link to={"/"} className="w-full">
                                            <li className="list-none w-full">
                                                <Button className="w-full !text-left !justify-start !rounded-none">Boys</Button>
                                            </li>    
                                        </Link>                                                                 
                                    </ul>

                                </div>

                            </li>

                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Electronics
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Bags
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Footwear
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Groceries
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Beauty
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Wellness
                                    </Button>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link to={"/"} className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.7)]
                                        hover:!text-[#ff5252]">Jewellery
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col_3 w-[20%] text-[13px] font-[500]">
                        <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                             <GoRocket className="text-[18px]"/>
                            Free International Delivery
                        </p>
                    </div>

                </div>
            </nav>
            
            <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
        </>
    )
}

export default Navigation;