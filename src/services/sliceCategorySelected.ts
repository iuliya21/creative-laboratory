import { createSlice } from "@reduxjs/toolkit";

type THeader = {
  categorySelected: string | null;
}

const initialState: THeader = {
  categorySelected: "Все",
}

export const sliceCategory = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectedCategory: (state, action) => {
      state.categorySelected = action.payload;
    },
  }
});

export const { selectedCategory } = sliceCategory.actions;
export default sliceCategory.reducer;