import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[210px] overflow-hidden rounded-lg group">
      {
        props?.item?.subCatId !== undefined && props?.item?.subCatId !== null &&  props?.item?.subCatId !== ""  ?
          <Link to={`/products?subCatId=${props?.item?.subCatId}`} className="text-[16px] font-[600] link block h-full">
            <img src={props.img} className="block w-full h-full object-cover transition-all group-hover:scale-105 group-hover:rotate-1" alt="banner" />
          </Link>
          :

          <Link to={`/products?catId=${props?.item?.catId}`} className="text-[16px] font-[600] link block h-full">
            <img src={props.img} className="block w-full h-full object-cover transition-all group-hover:scale-105 group-hover:rotate-1" alt="banner" />
          </Link>

      }

    </div>
  );
};

export default BannerBox;
