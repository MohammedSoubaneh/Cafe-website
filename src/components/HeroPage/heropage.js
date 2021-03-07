import React, { useState, useEffect } from 'react'
import pleaseImage from '../HeroPage/NEW.jpg'

function HeroPage() {
    
    const [productName, setProductName ] = useState([])
    const [productImage, setProductImage ] = useState({'showImage': pleaseImage})
    const [productDescription, setProductDescription ] = useState('')
    const [cost, setCost] = useState(0)

    useEffect(() => {
        fetch('/hello').then(res => res.json()).then(data => {
            console.log(data)
            setProductName(data);
        });
    }, []);
    return (
        <div>
            <ul>
                {productName.map(getName => (
                    <li key={getName.nameproduct}>{getName.product_image} {getName.product_description}</li>
                ))}
            </ul>
            <p>Product one Title:  </p>
            <p>Product Image: </p>
            <img src={productImage.showImage} width="400px"></img>
            <p>product Description: </p>
        </div>
    )
}

export default HeroPage
