import React from 'react'
import HeroPage from '../HeroPage/heropage'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import HeroImage from '../HeroAnimation'

function HomePage() {
    return (
        <div>
            <HeroPage />
            <HeroImage />
            <Footer />
        </div>
    )
}

export default HomePage
