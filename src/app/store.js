import { createSlice } from "@reduxjs/toolkit";

const cakeSlice =createSlice({
    name:'caker',
    initialState:[],
    reducer:{
        
    }
});

export const store =cakeSlice.reducer;