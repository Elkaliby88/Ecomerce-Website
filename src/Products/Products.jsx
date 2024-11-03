import React, { useState } from "react";
import CSS from "./Products.module.css"
import Plane from "../assets/plane.png"
import { ProductsData } from "../data/product";
import {useAutoAnimate} from "@formkit/auto-animate/react"
const Products = () =>{
    const [parent] = useAutoAnimate()
        const[MenuProducts, setMenuProducts] = useState( ProductsData)
        const Filter =(type) =>{
            setMenuProducts(ProductsData.filter((product) =>product.type === type))
        }
    return(
        <div className={CSS.container}>
            <img src={Plane} alt=""/>
            <h1>Our Feature Products</h1>
            <div className={CSS.Products}>
                <ul className={CSS.menu}>
                    <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                    <li onClick={()=>Filter("skin care")}>Skin Care</li>
                    <li onClick={()=>Filter("conditioner")}>Conditioner</li>
                    <li onClick={()=>Filter("foundation")}>Foundation</li>
                </ul>
                <div className={CSS.list} ref={parent}>
                    {
                        MenuProducts.map((product,i) =>(
                            <div className={CSS.product}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}</span>
                                    <div>show now</div>
                                </div>
                                <img src={product.img} alt="" className="img-p"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Products