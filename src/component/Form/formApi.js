import axios from "axios";

const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchALLDatas = createAsyncThunk("data/getAPI", async () => {
    const response =await axios.get("http://localhost:4000/data") 
    return response.data;
});
export const createDatas = createAsyncThunk("data/getAPI", async (newData) => {
    const response = await axios.post("http://localhost:4000/data", newData);
    return response.data;
});
