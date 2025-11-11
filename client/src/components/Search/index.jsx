import React from "react";
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
    return(
        <>
            <div className="searchBox h-[50px] bg-[#e5e5e5] rounded-[5px] p-2 relative">
                <input type="text" placeholder="Search for products..." className="w-full h-[35px]
                focus:outline-none bg-inherit p-2 text-[15px]"></input>
                <Button className="!absolute top-[7px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black
                "><IoSearch className="text-[22px] text-[#4e4e4e]"/></Button>
            </div>
        </>
    )
}

export default Search;