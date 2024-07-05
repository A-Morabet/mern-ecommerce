import { createSlice } from "@reduxjs/toolkit"
import { updateCart } from "../utils/cartUtils.js"

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : { cartItems: [] } 

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existItem = state.cartItems.find((ele) => ele._id === item._id)

            if (existItem){
                state.cartItems = state.cartItems.map((ele) => ele._id === existItem._id ? item : ele) 
            } else {
                state.cartItems = [...state.cartItems, item]
            }

            return updateCart(state)
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer