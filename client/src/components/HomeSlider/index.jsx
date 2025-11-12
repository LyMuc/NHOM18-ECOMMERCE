import React from "react";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
    return(
        <div className="homeSlider py-4">
            <div className="container">
                <Swiper 
                    spaceBetween={10} 
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} 
                    navigation={true} 
                    modules={[Autoplay, Navigation]} 
                    className="sliderHome"
                >
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                             <img src="https://serviceapi.spicezgold.com/download/1761362043357_34292.jpg" alt="Banner slide" className="w-full"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1761362025223_34295.jpg" alt="Banner slide" className="w-full"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg" alt="Banner slide" className="w-full"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg" alt="Banner slide" className="w-full"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item rounded-[20px] overflow-hidden">
                            <img src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg" alt="Banner slide" className="w-full"></img>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;