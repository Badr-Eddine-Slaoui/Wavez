import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    merchs : []
}

const merchSlice = createSlice({
    name: "merch",
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const merch = state.merchs.find(m => m.id === action.payload.id)
            merch ? merch.quantity++ 
            : state.merchs = [...state.merchs,{...action.payload,quantity:1}]
        },
        removeOneFromCart: (state,action)=>{
            const merch = state.merchs.find(m => m.id === action.payload)
            merch.quantity !== 1 ? merch.quantity--
            : state.merchs = state.merchs.filter(m => m.id !== action.payload)
        },
        removeFromCart: (state,action)=>{
            state.merchs = state.merchs.filter(m => m.id !== action.payload)
        }
    }
})

export const { addToCart , removeFromCart , removeOneFromCart } = merchSlice.actions

export default merchSlice.reducer