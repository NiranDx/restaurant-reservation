import { createReducer } from "@reduxjs/toolkit";
import { createContext } from "react";
import { restaturantList } from '../Mock/restaurant'


export const initalState = {
    shop: [],
}
export const reducer = createReducer(initalState, {
    LOAD_DATA: (state, action) => {
        const { key, value } = action.payload
        return {
            ...state,
            shop: restaturantList
        }
    },
})

const RestaurantContext = createContext('')
export default RestaurantContext;
