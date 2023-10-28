import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  originalSneakers: [], // Исходный массив товаров
  filteredSneakers: [], // Отфильтрованный массив товаров
  filters: {
    brandId: [],
    minPrice: null,
    maxPrice: null,
    sizes: [],
  },
};

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setSneakers: (state, action) => {
      state.originalSneakers = action.payload;
      state.filteredSneakers = action.payload; // Изначально фильтрованный массив равен исходному массиву
    },
    filterSneakers: (state, action) => {
      state.filters = action.payload;

      // Применение фильтров к исходному массиву и сохранение результата в filteredSneakers
      state.filteredSneakers = state.originalSneakers.filter((sneaker) => {
        const { brandId, minPrice, maxPrice } = state.filters;
        const brandMatch = !brandId.length || brandId.includes(sneaker.brandId);
        const priceMatch = (!minPrice || sneaker.price >= minPrice) && (!maxPrice || sneaker.price <= maxPrice);
        return brandMatch && priceMatch;
      });
    },

    clearFilters: (state) => {
      state.filters = {
        brandId: [],
        minPrice: null,
        maxPrice: null,
        sizes: [],
      };
      state.filteredSneakers = state.originalSneakers;
    },
    setFiltersDefault: (state, action) => {
      state.filters = action.payload;

    },
    setSizes: (state, action) => {
      state.filters.sizes = action.payload;
    },
  },
});

export const { setSneakers, filterSneakers, clearFilters, setFiltersDefault } = sneakersSlice.actions;
export default sneakersSlice.reducer;
