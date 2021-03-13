import React from 'react'
import PhoneIcon from '../images/phoneicon.png'
import faceBookLogo from '../images/fb.svg'
import instagramLogo from '../images/in.svg'
import twitterLogo from '../images/tw.svg'
import youtubeLogo from '../images/yt.svg'

function footer() {
    return (
        <div>
            <div className="footerContainer">
                <div className="sectionOne">
                    <img src={PhoneIcon} className="phoneIcon"/>
                    <div className="specialOffer">Want to recieve special offers and news directly to your inbox?</div>
                    <div className="subscribeSection">
                        <div className="subscribeText">Subscribe to our newsletter</div>
                    </div>
                </div>
                <div className="sectionTwo">
                    <div className="subSectionOne">
                        <div className="yourExperience">Your Oquendo experience</div>
                        <div className="firstList">
                        <ul>
                            <li>WE ARE COFFE</li>
                            <li>QUALITY AT THE SOURCE</li>
                            <li>OUR BRANDS</li>
                            <li>OUR TEAM</li>
                            <li>OUR HISTORY</li>
                            <li>DISCOVER YOUR BLENDS</li>
                        </ul>
                        </div>
                    </div>
                    <div className="subSectionTwo">
                        <div className="followUs"> Follow Us</div>
                        <div className="socials">
                            <div className="fb"><img src={faceBookLogo} /> </div>
                            <img className="in" src={instagramLogo} />
                            <img className="tw" src={twitterLogo} />
                            <img className="yt" src={youtubeLogo} />
                        </div>
                        <div className="payments">
                            <img />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default footer
