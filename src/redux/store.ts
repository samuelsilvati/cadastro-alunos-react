import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './reduxPersist';
import authSlice from './auth/slice';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer(authSlice),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
