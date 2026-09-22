import { createSlice } from "@reduxjs/toolkit";

const cartSice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{

            let existingProduct = state.find(pro => pro.id == action.payload.id )
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price

            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }

        },
        removeFromCart:(state,action)=>{
            return state.filter(pro => pro.id !== action.payload)
        }
    }
})

export const {addToCart} = cartSice.actions
export const {removeFromCart} = cartSice.actions
export default cartSice.reducer