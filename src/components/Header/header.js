import React from 'react'
import logo from '../img/oquendo-logo.png'

function header() {
    return (
        <div className='navBarOuter'>
            <div className='logoOuter'>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
            </div>
            <div className='navBarOuter'>
                <ul>
                    <li>WE'RE COFFEE</li>
                    <li>BUSINESS AREAS</li>
                    <li>ONLINE STORES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default header
