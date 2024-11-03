import React, { useState } from "react";
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CiMail} from 'react-icons/ci'
import { FiAlignJustify } from "react-icons/fi";
const Header = () => {
    const [ShowMenu,setShowMenu] = useState(true)
    const toggleMenu = () =>{
        setShowMenu((ShowMenu)=>!ShowMenu)
    }
    return(
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>amazon</span>
            </div>
            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                    <FiAlignJustify/>
                </div>
                <ul className={css.menu}  style={{display:ShowMenu? "initial":"none"}}>
                    <li className={css.items}>
                        <a href="#Collections" className={css.link}>
                            <span>Collections</span>
                        </a>
                    </li>
                    <li className={css.items}>
                        <a href="#Brands" className={css.link}>
                            <span>Brands</span>
                        </a>
                    </li>
                    <li className={css.items}>
                        <a href="#News" className={css.link}>
                            <span>News</span>
                        </a>
                    </li>
                    <li className={css.items}>
                        <a href="#Brands" className={css.link}>
                            <span>Brands</span>
                        </a>
                    </li>
                    <li className={css.items}>
                        <a href="#Sales" className={css.link}>
                            <span>Sales</span>
                        </a>
                    </li>
                    <li className={css.items}>
                        <a href="#ENG" className={css.link}>
                            <span>ENG</span>
                        </a>
                    </li>
                </ul>
            <input type="text" className={css.search} placeholder="Search"/>
            <CiMail className={css.mail}/>
            </div>
        </div>
    )
}
export default Header