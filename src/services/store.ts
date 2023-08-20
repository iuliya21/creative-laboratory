import { configureStore } from '@reduxjs/toolkit';
import { sliceToys } from './slice';

export const store = configureStore({
  reducer: {
    data: sliceToys.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;