import { ADD_TO_BASKET } from "./types"
import { REMOVE_FROM_BASKET } from "./types"

export function addToBasket(basket, checked) {
    return {
        type: ADD_TO_BASKET,
        payload: basket,
        checked
    }
}

export function deleteProductsFromBasket(basket, checked){
    return {
        type: REMOVE_FROM_BASKET ,
        payload: basket,
        checked
    }
}