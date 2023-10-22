import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import propsSlice from "./propsSlice";
import sneakersSlice from "./sneakersSlice";
import brandSlice from "./brandSlice";
import paginationSlice from "./paginationSlice.jsx";

export default configureStore({
  reducer: {
    auth: authSlice,
    props: propsSlice,
    sneakers: sneakersSlice,
    brand: brandSlice,
    pagination: paginationSlice,
  },
});
