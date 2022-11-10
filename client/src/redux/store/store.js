import { configureStore, applyMiddleware, combineReducers} from "@reduxjs/toolkit";
// import {allReducer} from '../reducers/reducers'
import createSagaMiddleware from 'redux-saga'
import { StoreEnhancer } from "redux";
import todoReducer from "../reducers/todo/todoReducer";
import rootSaga from "../sagas";
const rootReducer = combineReducers({
    todos: todoReducer
});

//saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({reducer: rootReducer, middleware: [sagaMiddleware]});

sagaMiddleware.run(rootSaga);
export default store;