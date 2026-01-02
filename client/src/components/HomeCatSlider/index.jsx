import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/free-mode';

import { Navigation,FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const HomeCatSlider = (props) => {

  const context = useContext(MyContext);

  return (
    <div className="homeCatSlider pt-0 lg:pt-4 py-4 lg:py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={context?.windowWidth < 992 ? false : true}
          modules={[Navigation, FreeMode]}
          freeMode={true}
          breakpoints={{
            300: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            550: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1100: {
              slidesPerView: 8,
              spaceBetween: 5,
            },
          }}
          className="mySwiper"
        >
          {
            props?.data?.map((cat, index) => {
              return (
                <SwiperSlide>
                  <Link to="/">
                    <div className="item w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] bg-white rounbded-sm text-center flex items-center justify-center flex-col shadow-sm">
                      <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center overflow-hidden">
                        <img
                          src={cat?.images[0]}
                          className="w-full h-full object-contain transition-all"
                          alt={cat?.name}
                        />
                      </div>
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">{cat?.name}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })
          }


        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
