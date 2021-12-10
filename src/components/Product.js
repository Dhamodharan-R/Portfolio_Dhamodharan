import React from 'react'
import "./product.css"


function Product({img,title}) {
    return (
        <div className="p">
            <div className="p-browser">
                <p className="p-title">{title}</p>
            </div>
            <div className="p-img">
                <img src={img} className="pimg" alt=""/>
            </div>
        </div>
    )
}

export default Product
