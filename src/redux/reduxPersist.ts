import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer, Action } from 'redux';

export default (reducers: Reducer<any, Action<any>>) => {
  const persistedReducer = persistReducer(
    {
      key: 'CADASTRO-DE-ALUNOS-APP',
      storage,
      whitelist: ['botaoClicado'],
    },
    reducers
  );

  return persistedReducer;
};
