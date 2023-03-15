import { combineReducers } from '@reduxjs/toolkit';
import botaoSlice from './modules/example/reducers';

interface RootState {
  example: ReturnType<typeof botaoSlice.reducer>;
}

const rootReducer = combineReducers<RootState>({
  example: botaoSlice.reducer,
});

export default rootReducer;
