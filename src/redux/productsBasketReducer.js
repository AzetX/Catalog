import { ADD_TO_BASKET }  from './types'
import { REMOVE_FROM_BASKET } from "./types"

const initialState = { 
    basket: [],
    checked: false
}
//or checkboxes
export const basketReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_BASKET: 
            return {...state, basket: state.basket.concat([action.payload]), checked: true} // возращаем копию стейта, 2 параметр
        case REMOVE_FROM_BASKET:
            return {...state, basket: state.basket.filter(product => action.payload !== product), checked: false}
        default: return state
    }

}