import { ADD_TO_BASKET }  from './types'
import { REMOVE_FROM_BASKET } from "./types"

const initialState = { 
    basket: [],
    checked: false
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_BASKET: 
            return {...state, basket: state.basket.concat([action.payload]), checked: true} 
        case REMOVE_FROM_BASKET:
            return {...state, basket: state.basket.filter(product => action.payload !== product), checked: false}
        default: return state
    }

}