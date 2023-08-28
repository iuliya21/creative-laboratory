import { createSlice } from "@reduxjs/toolkit";
import { Toy } from "./types";

type TDetails = {
  details: Toy | null;
}

const initialState: TDetails = {
  details: null,
}

export const sliceDetails = createSlice({
  name: "details",
  initialState,
  reducers: {
    selectedToy: (state, action) => {
      state.details = action.payload;
    },
    deleteDetails: (state) => {
      state.details = null;
    }
  },
});

export const { selectedToy, deleteDetails } = sliceDetails.actions;
export default sliceDetails.reducer;