import { ADD_TO_CART, DECREASE_Q, INCREASE_Q } from './actionTypes'

export const addToCart = (id) => ({
    type: ADD_TO_CART,
    payload: id
})

export const increaseQ = (id) => ({
    type: INCREASE_Q,
    payload: id
})

export const decreaseQ = (id) => ({
    type: DECREASE_Q,
    payload: id
})