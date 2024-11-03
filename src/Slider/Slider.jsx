import React from "react";
import {Swiper, SwiperSlide} from "swiper/react"
//import swiper styles//
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Slider.css'
import { SliderProducts } from "../data/product";
const Slider = () =>{
    return(
        <div className="s-container">
            <Swiper  
            slidesPerView={3}
            spaceBetween={40}
            slidesPerGroup={1}
            loop={true}
            >
                {SliderProducts.map((slide, i) =>(
                    <SwiperSlide>
                        <div className="left-s">
                            <div className="name">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>{slide.price}</span>
                            <button>shop now</button>
                        </div>
                        <img src={slide.img} alt="prodects" className="img-p"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Slider