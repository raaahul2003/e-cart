import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishlists:(state,action)=>{

            state.push(action.payload)
        },
        removeFromWishlists:(state,action)=>{

            return state.filter(pro => pro.id!==action.payload)
        }
    }
})

export const {addToWishlists} = wishlistSlice.actions
export const {removeFromWishlists} = wishlistSlice.actions
export default wishlistSlice.reducer

