import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import { combineReducers } from "@reduxjs/toolkit";

const allReducer = {
  todos: todoReducer,
};

export default allReducer;
