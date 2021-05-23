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
// import React, { useState, useEffect, useReducer, useContext } from 'react'

// import Home from '../pages/Home'


// const initalState = {
//     shop: [],
// }

// const reducer = (state, { type, payload }) => {
//     switch (type) {
//         case 'LOAD_DATA':
//             const { key, value } = payload
//             return {
//                 ...state,
//                 [key]: value
//             }

//         default:
//             return state
//     }
// }

// const RestaurantInfoContext = React.createContext(restaturantList)
// // function RestaurantContext() {
    
// const RestaurantContext = () => {
    
    // useEffect(() => {
    //     dispatch({
    //         type: "LOAD_DATA",
    //         payload: {
    //             key: "shop",
    //             value: restaturantList
    //         },
    //     })
    // }, [])
    
    // const [{ shop, }, dispatch] = useReducer(reducer, initalState)

//     return (
//         <RestaurantInfoContext.Provider value={restaturantList}>
//             <Home />
//         </RestaurantInfoContext.Provider>
//     )
// }

