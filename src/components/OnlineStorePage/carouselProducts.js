import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductOne from '../images/productOne.png';
import ProductTwo from '../images/ProductTwo.png';
import ProductThree from '../images/ProductThree.png';
import ProductFour from '../images/ProductFour.png';

function carouselProducts() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
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
            <div className="carouselProduct">
            <Carousel
                partialVisbile={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                    <div className="productSlider">
                        <img src={ProductOne} className="productImage"/>
                        <p className="productName">Natural Coffee</p>
                        <p className="productDescription">Natural ground coffee</p>
                        <div className="priceWeight">
                            <p className="price">3,75</p>
                            <p className="weight">250g</p>
                        </div>
                        </div>
                        <div className="productSlider">
                        <img src={ProductTwo} className="productImage"/>
                        <p className="productName">Natural Coffee</p>
                        <p className="productDescription">Natural ground coffee</p>
                        <div className="priceWeight">
                            <p className="price">3,75</p>
                            <p className="weight">250g</p>
                        </div>
                        </div>
                        <div className="productSlider">
                        <img src={ProductThree} className="productImage"/>
                        <p className="productName">Natural Coffee</p>
                        <p className="productDescription">Natural ground coffee</p>
                        <div className="priceWeight">
                            <p className="price">3,75</p>
                            <p className="weight">250g</p>
                        </div>
                        </div>
                        <div className="productSlider">
                        <img src={ProductFour} className="productImage"/>
                        <p className="productName">Natural Coffee</p>
                        <p className="productDescription">Natural ground coffee</p>
                        <div className="priceWeight">
                            <p className="price">3,75</p>
                            <p className="weight">250g</p>
                        </div>
                        </div>
            </Carousel>
            </div>
    )
}

export default carouselProducts
