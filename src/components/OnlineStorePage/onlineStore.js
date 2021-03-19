import React from 'react'
import SubHeader from '../subHeader/subHeader'
import Header from '../Header/header'
import CarouselView from '../CarouselProdcut/CarouselView'
import CategorySearch from '../OnlineStorePage/poductSearch'

function onlineStore() {
    return (
        <div>
            <Header />
            <SubHeader />
            <CarouselView />
            <CategorySearch />
        </div>
    )
}

export default onlineStore
