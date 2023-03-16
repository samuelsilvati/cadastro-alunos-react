import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import botaoSlice from './slice';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: botaoSlice,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
