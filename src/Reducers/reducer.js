
import { ADD_TO_CART, DECREASE_Q, INCREASE_Q } from "./actionTypes";
import initState from "./initState";

const reducer = (state = initState , action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            state.map(item => {
                if(item.id === action.payload){
                    return ({
                        ...item, cartIsClicked: true
                    })
                }
                return item
            })
        }
        case INCREASE_Q:{
            state.map(item => {
                if(item.id ===action.payload){
                    return({
                        ...item, selectedItem: item.selectedItem + 1,
                        avail: item.avail - 1
                    })
                }
            })
        }
        case DECREASE_Q:{
            state.map(item => {
                if(item.id ===action.payload){
                    return({
                        ...item, selectedItem: item.selectedItem - 1,
                        avail: item.avail + 1 
                    })
                }
            })
        }
        default:
            return state
    }
}

export default reducer