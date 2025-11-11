import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";

import "../Navigation/style.css";
import { Link } from 'react-router-dom';

const CategoryPanel = (props) => {

  const [submenuIndex , setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex , setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubMenu = (index) => {
    if(submenuIndex === index){
      setSubmenuIndex(null);
    }
    else{
      setSubmenuIndex(index);
    }
  }

  const openInnerSubMenu = (index) => {
    if(innerSubmenuIndex === index){
      setInnerSubmenuIndex(null);
    }
    else{
      setInnerSubmenuIndex(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
        <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
            Shop By Categories <IoCloseSharp className={"cursor-pointer text-[20px]"} onClick={toggleDrawer(false)}/>
        </h3>

        <div className="scroll">
          <ul className='w-full'>
             <li className='list-none flex items-center relative flex-col'>
              <Link to={"/"} className='w-full'>
                <Button className='w-full !text-left !justify-start !px-3 !text-black'> Fashion  </Button>
              </Link>
      
                {
                  submenuIndex ===0 ? (
                    <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubMenu(0)}/>
                  ) : (
                    <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubMenu(0)}/>
                  )
                }

                {
                  submenuIndex === 0 && (
                    <ul className="submenu  w-full pl-3">
                      <li className='list-none relative'>
                        <Link to={"/"} className='w-full'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-black'> Apparel </Button>
                        </Link>
                           {
                            innerSubmenuIndex ===0 ? (
                              <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubMenu(0)}/>
                            ) : (
                              <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubMenu(0)}/>
                            )
                          }

                          {
                            innerSubmenuIndex === 0 && (
                              <ul className="inner_submenu  w-full pl-3">
                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Smart Tablet </Link>
                                  
                                </li>

                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Crepe T-Shirt </Link>
                                    
                                </li>

                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Leather Watch </Link>
                                    
                                </li>

                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Rolling Diamond </Link>
                                    
                                </li>
                            </ul>
                            )}
                      </li>

                      {/* <li className='list-none relative'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-black'> Fashion  </Button>
                          <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                      </li>

                      <li className='list-none relative'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-black'> Fashion  </Button>
                          <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                      </li> */}
                </ul>
                )}
             </li>

             <li className='list-none flex items-center relative flex-col'>
              <Link to={"/"} className='w-full'>
                <Button className='w-full !text-left !justify-start !px-3 !text-black'> Fashion  </Button>
              </Link>
      
                {
                  submenuIndex ===1 ? (
                    <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubMenu(1)}/>
                  ) : (
                    <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubMenu(1)}/>
                  )
                }

                {
                  submenuIndex === 1 && (
                    <ul className="submenu w-full pl-3">
                      <li className='list-none relative'>
                        <Link to={"/"} className='w-full'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-black'> Apparel </Button>
                        </Link>
                           {
                            innerSubmenuIndex ===1 ? (
                              <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubMenu(1)}/>
                            ) : (
                              <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubMenu(1)}/>
                            )
                          }

                          {
                            innerSubmenuIndex === 1 && (
                              <ul className="inner_submenu w-full pl-3">
                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Smart Tablet </Link>
                                  
                                </li>

                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Crepe T-Shirt </Link>
                                    
                                </li>

                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Leather Watch </Link>
                                    
                                </li>

                                <li className='list-none relative mb-1'>
                                    <Link to={"/"} className='w-full !text-left !justify-start !px-3 link transition text-[14px]'> Rolling Diamond </Link>
                                    
                                </li>
                            </ul>
                            )}
                      </li>

                      {/* <li className='list-none relative'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-black'> Fashion  </Button>
                          <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                      </li>

                      <li className='list-none relative'>
                          <Button className='w-full !text-left !justify-start !px-3 !text-black'> Fashion  </Button>
                          <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
                      </li> */}
                </ul>
                )}
             </li>
          </ul>

          
        </div>
    </Box>
  );
    
    return(
        <>
            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default CategoryPanel;