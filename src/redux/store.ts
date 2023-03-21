import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistedReducer from './reduxPersist';
import authSlice from './auth/slice';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authSlice,
});

const store = configureStore({
  reducer: persistedReducer(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
export default store;
