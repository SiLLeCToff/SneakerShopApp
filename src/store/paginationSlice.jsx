import {createSlice} from "@reduxjs/toolkit";


const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        currentPage: 1,
        itemsPerPage: 16,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
})

export const { setCurrentPage } = paginationSlice.actions;
export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectItemsPerPage = (state) => state.pagination.itemsPerPage;

export default paginationSlice.reducer;