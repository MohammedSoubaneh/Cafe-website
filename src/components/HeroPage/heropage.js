import React, { useState, useEffect } from 'react'
import firstImage from '../HeroPage/NEW.jpg'
import secondImage from '../HeroPage/tasty.png'
import Carousel from 'react-elastic-carousel'
import productSlide from '../HeroPage/ProductSlide';
import slideOne from '../images/slide1.jpg'
import slideTwo from '../images/slide2.jpg'
import slideThree from '../images/slide3.jpg'

function HeroPage() {
    
    const [productName, setProductName ] = useState([])
    const [productImage, setProductImage ] = useState({'showImage': firstImage})
    const [productDescription, setProductDescription ] = useState('')
    const [cost, setCost] = useState(0)

    useEffect(() => {
        fetch('/get_product').then(res => res.json()).then(data => {
            console.log(data)
            setProductName(data);
        });
    }, []);

    const breakPoint = [
        { width: 400, itemsToShow: 1}
    ]
    return (
           <Carousel breakPoints={breakPoint}>
               <productSlide><img src={slideOne} className="slideOne"></img></productSlide>
               <productSlide><img src={slideTwo} className="slideTwo"></img></productSlide>
               <productSlide><img src={slideThree} className="slideThree"></img></productSlide>
           </Carousel>
    )
}

export default HeroPage
