import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-bootstrap'
import slideOne from '../images/slide1.jpg'
import slideTwo from '../images/slide2.jpg'
import slideThree from '../images/slide3.jpg'
import { Link } from 'react-router-dom'

function CarouselView() {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products').then(response =>
            response.json().then(data => {
                setProducts(data.products);
            })
        );
    }, []);

    console.log(products)



    return (
        <div className="onlinePage">
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
            <div className="blackSpace"></div>
        </div>
    )
}

export default CarouselView
