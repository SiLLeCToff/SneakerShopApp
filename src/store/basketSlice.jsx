import {createSlice} from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name: "basket",
    initialState: {
        id: null,
        items: [],
    },
    reducers: {
        getBasket: (state, action) => {
        state.id = action.payload.id;
        state.items = action.payload.items;
}
    }

})


export const  {
    getBasket
} = basketSlice.actions

export default basketSlice.reducer