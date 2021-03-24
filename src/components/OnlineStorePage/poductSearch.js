import React, { useState, useEffect } from 'react'
import CoffeeBean from '../images/Coffeebeans.jpg'
import GroundCoffee from '../images/groundcoffee.jpeg'
import ExpressoMachine from '../images/expressomachine.png'
import ExpressoMachineAgain from '../images/expressagainmachine.png'
import HotChocolate from '../images/hotchocolate.jpg'
import TeaInfusion from '../images/teaInfusion.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductOne from '../images/productOne.png';
import ProductTwo from '../images/ProductTwo.png';
import ProductThree from '../images/ProductThree.png';
import ProductFour from '../images/ProductFour.png';
import ProductCarousel from './carouselProducts'
import ShippingInfo from './shippment'


function CategorySearch() {

       
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className='categorySearch'>
            <div className='innerCategorySearch'>
                <div className="productCategory">
                    <img className="productImage" src={CoffeeBean} width="400px"/>
                    <div className="productText">Coffee Beans</div>
                </div>
                <div className="productCategory">
                    <img className="productImage" src={GroundCoffee} width="400px"/>
                    <div className="productText">Ground Coffee</div>
                </div>
                <div className="productCategory">
                    <img className="productImage"  src={ExpressoMachine} width="400px"/>
                    <div className="productText">Coffee Capsules Compatible with <br/> Nespresso System</div>
                </div>
                <div className="productCategory">
                    <img className="productImage" src={ExpressoMachineAgain} width="400px"/>
                    <div className="productText">Coffee Capsules Compatible <br/> with Dolce Gusto System</div>
                </div>
                <div className="productCategory">
                    <img className="productImage" src={HotChocolate} width="400px"/>
                    <div className="productText">Hot Chocolate</div>
                </div>
                <div className="productCategory">
                    <img className="productImage" src={TeaInfusion} width="400px"/>
                    <div className="productText">Teas And Infusions</div>
                </div>
            </div>
            <ProductCarousel />
            <div className="topSale">
              <h1>Top sales</h1>
              <div className="redLine"></div>
              <h2>Find out which products are most successful in our online store</h2>
            </div>
            <ShippingInfo />
        </div>

    )
}

export default CategorySearch
