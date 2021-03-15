import React, { useState, useEffect } from 'react'
import firstImage from '../HeroPage/NEW.jpg'
import secondImage from '../HeroPage/tasty.png'
import { Carousel } from 'react-bootstrap'
import productSlide from '../HeroPage/ProductSlide';
import slideOne from '../images/slide1.jpg'
import slideTwo from '../images/slide2.jpg'
import slideThree from '../images/slide3.jpg'
import Header from '../Header/header'
import { Link } from 'react-router-dom'
 
function heropage() {
    return (
        <>
        <Header />
        <div className="fullPage">
        <Carousel>
        <Carousel.Item interval={600000}>
            <img
            className="aBlock"
            src={slideOne}
            alt="First slide"
            />
            <Carousel.Caption>
            <div className="title">
            <h3 className="firstTitle">New Online Store</h3>
            <h2 className="firstSubTitle">Discover the new online shopping experience</h2>
            <div className="visitShop"><Link to="onlineStore" style={{ textDecoration: 'none', color: 'black'}}activeClassName="active-logo">VISIT OUR SHOP</Link></div>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={60000}>
            <img
            className="bBlock"
            src={slideTwo}
            alt="Second slide"
            />
            <Carousel.Caption>
            <div className="title">
            <h3 className="secondTitle">ENVIORNMENTALLY FRIENDLY</h3>
            <h2 className="secondSubTitle">Biodegradable, compostable</h2>
            <h2 className="thirdSubTitle">and sealed capsules </h2>
            </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="cBlock"
            src={slideThree}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        </>
    )
}

export default heropage

