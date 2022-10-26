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
      return [
        {
          id: genId(state),
          content: action.content,
          completed: false,
        },
        ...state,
      ];

    case "CHECKED":
      return state.map((todo, index) => {
        if (todo.id === action.payload.id) {
          return [...todo, { completed: !todo.completed }];
        }
        return todo;
      });

    case "REMOVE":
      return state.filter((todo, index) => {
        if (todo.id === action.payload.id) {
          return false;
        }
        return true;
      });

    default:
      return state;
  }
}
