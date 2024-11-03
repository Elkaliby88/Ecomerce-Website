import React from "react";
import css from "./Hero.module.css"
import HeroImg from "../assets/hero.png"
import { FaBagShopping } from "react-icons/fa6"
import { BsArrowRightCircle } from "react-icons/bs"
import {motion} from "framer-motion"
const Hero = () =>{
    const transition = {duration: 3, type: "spring"}
    return(
        <div className={css.container}>
            {/*the lift side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin proptection cream</span>
                <div className={css.text2}>
                    <span>Trendy Collections</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
                </div>
            </div>
            {/*middle side hero image*/}
            <div className={css.wrapper}>
                <motion.div 
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}
                className={css.blueCircle}></motion.div>
                <motion.img
                transition={transition}
                initial={{bottom:"2rem"}}
                whileInView={{bottom:"0rem"}}
                src={HeroImg} alt="" width={600}/>
                <motion.div
                transition={transition}
                initial={{right:"4%"}}
                whileInView={{right:"2%"}}
                className={css.cart2}>
                    <FaBagShopping />
                    <div className={css.sginup}>
                        <span>Best Sginup Offers</span>
                        <div>
                            <BsArrowRightCircle />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/*the right side*/}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>    
        </div>
    )
}
export default Hero