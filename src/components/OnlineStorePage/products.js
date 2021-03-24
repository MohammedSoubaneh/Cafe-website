import React, { useState, useEffect} from 'react'
import layedCoffeBeans from '../images/layedCoffeeBeans.png'

function ProductsList() {

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
        <div className="productsContainter">
            <div className="bannerContainer">
                <div className="titles">
                    <h2>Cafe</h2>
                    <h1>Grano</h1>
                </div>
                <div className="image">
                    <img src={layedCoffeBeans} className="image" />
                </div>
            </div>
        </div>
    )
}

export default ProductsList
