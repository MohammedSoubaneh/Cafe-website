import React from 'react'
import SubHeader from '../subHeader/subHeader'
import Header from '../Header/header'
import CarouselView from '../CarouselProdcut/CarouselView'
import CategorySearch from '../OnlineStorePage/poductSearch'
import Footer from '../Footer/footer'

function onlineStore() {
    return (
        <div>
            <Header />
            <SubHeader />
            <CarouselView />
            <CategorySearch />
            <Footer />
        </div>
    )
}

export default onlineStore
