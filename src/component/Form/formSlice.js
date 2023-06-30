
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import  {fetchALLDatas}  from "./formApi";
import axios from "axios";
 
const initialState = { data: [] , carsData: [],};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        // storeData: (state, { payload }) => {
        //     state.data = [...state.data, payload]
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchALLDatas.fulfilled, (state, action) => {
          state.carsData = action.payload;
        });
    }

})
// export const { storeData } = formSlice.actions
export const getAllData = (state) => state.form.data
export const getAllDataApi = (state) => state.form.carsData
export default formSlice.reducer
