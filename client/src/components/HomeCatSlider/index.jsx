import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import {Link} from "react-router-dom";

const HomeCatSlider = () => {
    return(
        <>
            <div className="homeCatSlider pt-4 py-8">
                <div className="container">
                        <Swiper
                            slidesPerView={8}
                            spaceBetween={10}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Link to={"/"}>
                                    <div className="item py-7 px-3 flex items-center justify-center rounded-sm text-center flex-col bg-white">
                                        <img src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png" alt="Category img" className="w-[60px]"></img>
                                        <h3 className="mt-3 font-[500] text-[15px] transition-all"> Fashion </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>

                            
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeCatSlider;