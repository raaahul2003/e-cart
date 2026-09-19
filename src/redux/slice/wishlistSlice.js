import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishlists:(state,action)=>{

            state.push(action.payload)
        }
    }
})

export const {addToWishlists} = wishlistSlice.actions
export default wishlistSlice.reducer

