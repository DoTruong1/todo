import { createSlice } from "@reduxjs/toolkit";

const initialize = [
  {
    id: "1",
    content: "Job1",
    completed: false,
  },
  {
    id: "2",
    content: "Job2",
    completed: false,
  },
  {
    id: "3",
    content:
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    completed: false,
  },
];

const genId = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(maxID, todo.id), -1);
  return maxID + 1;
};

export default function todoReducer(state = initialize, action) {
  switch (action.type) {
    case "ADD":
      console.log(action.type)
      return [
        {
          id: genId(state),
          content: action.payload,
          completed: false,
        },
        ...state,
      ];

    case "CHECKED":
      return state.map((todo, index) => {
        if (todo.id === action.todo.id) {
          return {...todo, completed: !action.todo.completed };
        }
        return todo;
      });

    case "REMOVE":
      return state.filter((todo, index) => {
        // console.log(action.todo);
        if (todo.id === action.todo.id) {
          return false;
        }
        return true;
      });
    case "ONDRAGEND":
    {
      const newState = [...state];
      //xoa vi tri goc
      const [reorderedItem] = newState.splice(action.payload.source, 1)
      //chen item bi xoa vao vi tri moi
      newState.splice(action.payload.destination, 0, reorderedItem);
      return newState
    }


    default:
      return state;
  }
}
