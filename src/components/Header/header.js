import React, {useState} from 'react'
import Logo from '../images/logo.png'
import { Link  } from 'react-router-dom'


function Header() {

    const [isShown, setIsShown ] = useState(false);


    return (
        <div className='navBarOuter'>
            <div className='logoOuter'>
                <div className='logo'>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black'}}><img src={Logo}></img></Link>
                </div>
            </div>
            <div className='navBarOuter'>
                <div className="WeAre"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                >WE ARE COFFEE</div>
                <div className="Business">BUSINESS AREAS</div>
                <div className="headerContact">CONTACTS</div>
                <div className="En">EN</div>
            </div>
            {isShown && (
                    <div className="outerContainer">
                        <div className="InnerContainer">
                            <div className="quality">Quality from Origin</div>
                            <div className="history">Our History</div>
                            <div className="brand">Our Brand</div>
                            <div className="discover">Discover Our Blend </div>
                            <div className="team">Team</div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Header
