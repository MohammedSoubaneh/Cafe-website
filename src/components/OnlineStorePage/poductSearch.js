import React, { useState, useEffect } from 'react'
import CoffeeBean from '../images/Coffeebeans.jpg'
import GroundCoffee from '../images/groundcoffee.jpeg'
import ExpressoMachine from '../images/expressomachine.png'
import ExpressoMachineAgain from '../images/expressagainmachine.png'
import HotChocolate from '../images/hotchocolate.jpg'
import TeaInfusion from '../images/teaInfusion.jpg'


function CategorySearch() {


    const photos = [
        {
            image: CoffeeBean
        },
        {
            image: GroundCoffee
        },
        {
            image: ExpressoMachine
        },
        {
            image: ExpressoMachineAgain
        },
        {
            image: TeaInfusion
        },
        {
            image: HotChocolate
        }
    ]


    const [productSearchs, setProductSearchs] = useState([])

    useEffect(() => {
        fetch('/choose_category').then(response =>
            response.json().then(data => {
                setProductSearchs(data.choose_category);
            })
            );
    }, []);

    return (
        <div className='categorySearch'>
            <div className='innerCategorySearch'>
                {productSearchs.map(s => {
                    return(
                        <div className='outerContainer' key={s.name}>
                            <div className='innerContainer'>
                                <div className="image">
                                    {s.image}
                                </div>
                                <div className='nameContainer'>
                                    <div className='name'>{s.name}</div>
                                    <div className='arrowButton'>Arrow button</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
        </div>
    )
}

export default CategorySearch
