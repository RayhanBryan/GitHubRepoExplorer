import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {repositoryReducer} from './reducers';
import {watchFetchRepos} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    repository: repositoryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware), // Menonaktifkan thunk dan menambahkan saga
});

sagaMiddleware.run(watchFetchRepos);

export default store;
