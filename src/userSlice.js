import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUsers = createAsyncThunk(
  "users/load", //action name
  async (arg, ThunkAPI) => {
    //action function
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {
    [loadUsers.fulfilled]: (state, action) => {
      console.log(action);
    },
  },
});

export default userSlice.reducer;