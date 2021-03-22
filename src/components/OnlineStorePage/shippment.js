import React from 'react';
import Truck from '../images/Truck.svg';
import Clock from '../images/Clock.svg';
import Lady from '../images/Lady.svg';

function shippmentInfo() {
    return (
        <div className="outerContainerShipping">
            <div className="innerContainer">
                <div className="freeShipping">
                    <img className="shippingImage" src={Truck}/>
                    <p>FREE SHIPPING</p>
                    <p>Don't pay for shipping costs on orders over<br /> $19.90</p>
                </div>
                <div className="shippingTime">
                    <img className="shippingImage" src={Clock} />
                    <p>SHIPMENTS IN LESS THAN 48H</p>
                    <p>Recieve your order in 24 - 48h working on  penisula</p>
                </div>
                <div className="freeShipping">
                    <img className="shippingImage" src={Lady} />
                    <p>PHONE AND EMAIL SUPPORT</p>
                    <p>7:00-15:00 hours from Monday to Friday.<br />+34 985 260 046.<br /> email@example.com</p>
                </div>
            </div>
        </div>
    )
}

export default shippmentInfo
