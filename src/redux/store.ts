import { configureStore } from '@reduxjs/toolkit';
import botaoSlice from './slice';

const store = configureStore({
  reducer: botaoSlice,
});

export default store;
