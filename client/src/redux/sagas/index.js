import { all} from 'redux-saga/effects';
import {watchFetchTodo, deleteWatcher, addWatcher} from './todoSaga/index';

export default function* rootSaga() {
  yield all([watchFetchTodo(), deleteWatcher(), addWatcher()]);
}
