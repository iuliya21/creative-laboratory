import { configureStore } from '@reduxjs/toolkit';
import { sliceToys } from './sliceGetData';
import { sliceDetails } from './sliceDetailsToy';

export const store = configureStore({
  reducer: {
    data: sliceToys.reducer,
    details: sliceDetails.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;