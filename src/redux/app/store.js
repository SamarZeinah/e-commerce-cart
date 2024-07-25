import cartSlice from '../features/cartSlices'
import { configureStore } from '@reduxjs/toolkit'

//creat store
//Passing the reducer inside the store 
// and I made a variable to put Slice inside it 
export const store=configureStore({
reducer:{
    allCart:cartSlice
}

})
