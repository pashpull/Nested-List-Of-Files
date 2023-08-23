import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import dataReducer from './slices/dataSlice';
import asideNavReducer from './slices/asideNavSlice';
import commentsSaga from './sagas/dataSaga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield all([commentsSaga()]);
}

export const store = configureStore({
  devTools: true,
  reducer: {
    data: dataReducer,
    asideNav: asideNavReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
