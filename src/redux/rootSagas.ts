import { all } from 'redux-saga/effects';

import example from './sagas/sagas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): any {
  return yield all([example]);
}
