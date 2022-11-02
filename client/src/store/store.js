import { configureStore, applyMiddleware} from "@reduxjs/toolkit";
import allReducer from '../reducers/reducers'
import createSagaMiddleware from 'redux-saga'
import todoListSaga from '../sagas/todoListSaga'
// import createSagaMiddleware from 'redux-saga';


//saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: allReducer
}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoListSaga);
export default store;