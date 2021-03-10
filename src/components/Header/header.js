import React from 'react'
import Logo from '../images/logo.png'


function header() {
    return (
        <div className='navBarOuter'>
            <div className='logoOuter'>
                <div className='logo'>
                    <img src={Logo}></img>
                </div>
            </div>
            <div className='navBarOuter'>
                <div className="WeAre">WE ARE COFFEE</div>
                <div className="Business">BUSINESS AREAS</div>
                <div className="headerContact">CONTACTS</div>
                <div className="En">EN</div>
            </div>
        </div>
    )
}

export default header
