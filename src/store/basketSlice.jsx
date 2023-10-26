import {createSlice} from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        setBasket: (state, action) => {
        return  action.payload;
}
    }

})


export const  {
    setBasket
} = basketSlice.actions

export default basketSlice.reducer