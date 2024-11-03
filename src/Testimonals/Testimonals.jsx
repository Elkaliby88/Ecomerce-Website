import React from "react";
import css from "./Testimonals.module.css"
import Hero from "../assets/testimonialHero.png";
import {Swiper} from "swiper/react";
import {TestimonialsData} from "../data/testimonial"
import { SwiperSlide } from "swiper/react";
const Testimonals = () =>{
    return(
        <div className={css.Testimonals}>
            <div className={css.wapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
                </div>
                <img src={Hero} alt=""/> 
                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>
        <div className={css.reviews}>Reviews</div>
            <div className={css.carousal}>
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className={css.tcarousl}
                >
                    {
                        TestimonialsData.map((testimonial,i)=>(
                            <SwiperSlide>
                                <div className={css.Testimonal}>
                                    <img src={testimonial.image} alt=""/>
                                    <span>{testimonial.comment}</span>
                                    <hr/>
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>    
        </div>
    )
}
export default Testimonals