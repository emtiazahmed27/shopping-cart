import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import CartItem from "./CartItem"

const CartDetails = () => {
    const state = useSelector((state) => state)
    console.log(state);
    return (
        <div
            className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >{
                state.filter(item => item.cartIsClicked === true).map(elem => <CartItem props={elem} />)
            }
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetails