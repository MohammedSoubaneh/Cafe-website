import React, {useEffect, useRef} from 'react'
import Parallax from 'react-rellax'
import ForestBackground from './images/cafetal_rama_0.jpg'
import GreenTree from './images/cafetal_rama_1.png'
import BerryLeft from './images/branch_left.png'
import BerryRight from './images/branch_right.png'
import BerryCenter from './images/branch_center.png'
import Branch from './images/branch.png'

function HeroAnimation() {


    return (
        <div className='outterContainer'>
            <Parallax className='backgroundImage' speed={0} ><img src={ForestBackground} /></Parallax>
            <div className='qualitySource'>Quality At The Source</div>
            <Parallax className='greenTree' speed={3} ><img src={GreenTree}/></Parallax>
            <Parallax className='branch' speed={5} percentage={-0.2} ><img src={Branch} width='100%'/></Parallax>
            <Parallax className='berryImage'>
                <Parallax className='branchLeft' speed={9}><img src={BerryLeft}/></Parallax>
                <Parallax className='branchCenter' speed={9}><img src={BerryCenter}/></Parallax>
                <Parallax className='branchRight' speed={9}><img src={BerryRight} /></Parallax>
            </Parallax>
            <div className='singleBerry'></div>
                
            <div className='farmBackground'>
                <div className='seed'></div>
                <div>Premium Beans</div>
                <div className='cloudOne'></div>
                <div className='cloudTwo'></div>
                <div className='sun'></div>
            </div>
            <div className='redBackground'>
                <div className='singleCoffeBean'></div>
                <div className='multiiplebeans'></div>
                <div className='backgroundBeans'></div>
                <div>The Perfect Roast For Every Blend</div>
                <div className='coffeeBreakingUpOne'></div>
                <div className='coffeeBreakingUpTwo'></div>
                <div className='coffeeBreakingUpThree'></div>
            </div>
            <div className='yellowBackground'>
                <div className='coffeeDustOne'></div>
                <div className='coffeeDustTwo'></div>
                <div className='coffeeDustThree'></div>
                <div className='coffeeDustFour'></div>
                <div className='coffeeDustFive'></div>
                <div className='handOne'></div>
                <div className='handTwo'></div>
                <div className='handThree'></div>
                <div className='coffeeDroppingOne'></div>
                <div className='coffeeDroppingTwo'></div>
                <div className='coffeeDroppingThree'></div>
                <div className='coffeeCupOne'></div>
                <div className='coffeeCupTwo'></div>
                <div className='coffeeCupThree'></div>

            </div>
        </div>
    )
}

export default HeroAnimation
