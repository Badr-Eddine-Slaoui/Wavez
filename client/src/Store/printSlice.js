import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prints : []
}

const printSlice = createSlice({
    name: "print",
    initialState,
    reducers: {
        addToCart: (state,action)=>{
            const print = state.prints.find(m => m.id === action.payload.id)
            print ? print.quantity++ 
            : state.prints = [...state.prints,{...action.payload,quantity:1}]
        },
        removeOneFromCart: (state,action)=>{
            const print = state.prints.find(m => m.id === action.payload)
            print.quantity !== 1 ? print.quantity--
            : state.prints = state.prints.filter(m => m.id !== action.payload)
        },
        removeFromCart: (state,action)=>{
            state.prints = state.prints.filter(m => m.id !== action.payload)
        }
    }
})

export const { addToCart , removeFromCart , removeOneFromCart } = printSlice.actions

export default printSlice.reducer