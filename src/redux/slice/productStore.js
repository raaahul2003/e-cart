import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../slice/productSlice'
import wishListReducer from '../slice/wishlistSlice'


const store = configureStore({
    reducer: {
        product: productReducer,
        wishlist: wishListReducer

    }
})

export default store