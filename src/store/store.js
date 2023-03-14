import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "../components/searchSlice";

export default configureStore({
    reducer: {
        search: searchReducer
    }
})