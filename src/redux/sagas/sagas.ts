import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  botaoClicadoFailure,
  botaoClicadoRequest,
  botaoClicadoSuccess,
} from '../slice';

const request = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

function* exampleRequest() {
  try {
    yield call(request);
    yield put(botaoClicadoSuccess());
  } catch (error) {
    //  Handle error here
    toast.error('Request Rejected');
    yield put(botaoClicadoFailure());
  }
}

export default all([takeLatest(botaoClicadoRequest, exampleRequest)]);
