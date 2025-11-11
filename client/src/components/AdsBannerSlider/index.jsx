import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
    return(
        <div className="py-5 w-full">
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="smlBtn"
            >
                <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png"} link={"/"}/>
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png"} link={"/"}/>
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png"} link={"/"}/>
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png"} link={"/"}/>
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBox img={"https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png"} link={"/"}/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;

