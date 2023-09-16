import { configureStore } from '@reduxjs/toolkit';
import { sliceToys, sliceToysAnother } from './sliceGetData';
import { sliceDetails } from './sliceDetailsToy';
import { sliceCategory } from './sliceCategorySelected';

export const store = configureStore({
  reducer: {
    data: sliceToys.reducer,
    dataAnother: sliceToysAnother.reducer,
    details: sliceDetails.reducer,
    category: sliceCategory.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;