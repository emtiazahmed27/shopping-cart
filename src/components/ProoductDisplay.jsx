import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import Product from './Product'
const ProoductDisplay = () => {
    const state = useSelector((state) => state)
    console.log(state);
    return (
        <div
            className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
        >{
                state.map(item => (
                    <Product props={item} />
                ))
            }

        </div>
    )
}

export default ProoductDisplay