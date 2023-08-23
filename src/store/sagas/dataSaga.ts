import { call, put, takeLeading } from 'redux-saga/effects';

import { setData } from '../slices/dataSlice';

const dataRequest = async () => {
  const data = await (await fetch('../src/data/examp.json')).json();
  return data;
};

function* workerGetData(): any {
  const data = yield call(dataRequest);
  yield put(setData(data));
}

function* dataSaga() {
  yield takeLeading('data/dataRequest', workerGetData);
}

export default dataSaga;
