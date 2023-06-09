import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/banner-img/darius-F8E2tks5N04-unsplash.jpg'
import img2 from '../../../assets/banner-img/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg'
import img3 from '../../../assets/banner-img/kelly-sikkema-HwU5H9Y6aL8-unsplash.jpg'
import img4 from '../../../assets/banner-img/wes-hicks-MEL-jJnm7RQ-unsplash.jpg'

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Banner = () => {
    return (
        <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
           <div className='relative'>
           <img src={img1} alt="" srcset="" />
            <div className='absolute left-[450px] bottom-[450px] text-white'>
                <div>
                    <h2 className='text-6xl font-bold'>Music For Everyone</h2>
                    <p className='text-center mt-3 text-4xl'>Awaken Possibility</p>
                    <button className='text-center text-white font-semibold ml-[200px] mt-4 btn bg-[#C25934] hover:text-black'>Start Learning</button>
                </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
           <img src={img2} alt="" srcset="" />
            <div className='absolute left-[450px] bottom-[450px] text-white'>
                <div>
                    <h2 className='text-6xl font-bold'>Music is Your World</h2>
                    <p className='text-center mt-3 text-4xl'>Don't miss a chance</p>
                    <button className='text-center text-white font-semibold ml-[200px] mt-4 btn bg-[#C25934] hover:text-black'>Start Learning</button>
                </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
           <img src={img3} alt="" srcset="" />
            <div className='absolute left-[450px] bottom-[450px] text-white'>
                <div>
                    <h2 className='text-6xl font-bold'>Start With a Note</h2>
                    <p className='text-center mt-3 text-4xl'>Awaken Possibility</p>
                    <button className='text-center text-white font-semibold ml-[200px] mt-4 btn bg-[#C25934] hover:text-black'>Start Learning</button>
                </div>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
           <img src={img4} alt="" srcset="" />
            <div className='absolute left-[450px] bottom-[450px] text-white'>
                <div>
                    <h2 className='text-6xl font-bold'>Music For Everyone</h2>
                    <p className='text-center mt-3 text-4xl'>Awaken Possibility</p>
                    <button className='text-center text-white font-semibold ml-[200px] mt-4 btn bg-[#C25934] hover:text-black'>Start Learning</button>
                </div>
            </div>
           </div>
            </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;