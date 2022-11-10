import { createSlice } from "@reduxjs/toolkit";
import { Types } from "../../actions/constant";

const initialize = {todo: []};

const genId = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(maxID, todo.id), -1);
  return maxID + 1;
};

export default function todoReducer(state = initialize, action) {
  switch (action.type) {
    case "ADD":
      console.log(action.payload)
      return [
        {
          details: action.payload,
        },
        ...state,
      ];

    // case "CHECKED":
    //   return state.todo.map((item, index) => {
    //     console.log(action.item);
    //     if (item.id === action.todo.id) {
    //       return {...todo, completed: !action.todo.completed };
    //     }
    //     return todo;
    //   });

    case Types.REMOVE:
      {
        console.warn(action.payload.todoItemId)
        return {...state, todo: state.todo.filter(item => item.id !== action.payload.todoItemId)}
      }
    case "ONDRAGEND":
    {
      const newState = [...state];
      //xoa vi tri goc
      const [reorderedItem] = newState.splice(action.payload.source, 1)
      //chen item bi xoa vao vi tri moi
      newState.splice(action.payload.destination, 0, reorderedItem);
      return newState
    }

    case Types.GET_LIST_SUCCESS:
      {
        console.log('GET_LIST_SUCCESS')
        console.log(action.payload.data)
        return {
          ...state,
          todo: action.payload.data.data
        }
      }
    
    case Types.SHOW_TODO_lIST: 
    {
      console.log("show to do list")
      return state;
    }
    default:
      return state;
  }
}
