import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { loginRequest, loginSuccess, loginFailure } from './slice';
import axios from '../../services/axios';

function* login({ payload }: { payload: any }): Generator<any, any, any> {
  try {
    const response = yield call(axios.post, '/tokens/', payload);
    // eslint-disable-next-line react-hooks/rules-of-hooks

    yield put(loginSuccess(response.data));
    toast.success('Usuário logado!');
    console.log('This login');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (e) {
    toast.error('Usuário ou senha inválidos!');
    yield put(loginFailure(payload));
    console.log(e);
  }
}

export default all([takeLatest(loginRequest, login)]);
