import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlData = "https://64e23badab0037358818dad1.mockapi.io/toys";

export const getData = createAsyncThunk("toys/getData", async function () {
  const response = await fetch(urlData);
  const data = await response.json();
  return data;
});

export const sliceToys = createSlice({
  name: "toys",
  initialState: {
    toys: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.toys = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
