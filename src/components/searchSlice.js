import {createSlice} from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: [],
    reducers: {
        exploredVideos(state, action){
            return state = action.payload;
        }
    }
})

export default searchSlice.reducer;