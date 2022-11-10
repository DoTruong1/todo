import React, { useEffect } from "react";
// import "../css/App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {add, remove, checked, onDragEnd, getTodoListRequest, showTodoList, getDeleteReq, addReq} from "./redux/actions/actions";
import TodoList from "./components/todolist/index.js";
import {InputField} from './components/input/input'
import { Types } from "./redux/actions/constant";



// const getTodoList = require('./API/getTodo')
const App = (props) => {
  const [job, setJob] = useState("")

  function clearForm() {
    setJob('');
  }
  
  // const cardList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

   
  //get todosStae;
  
  const todos = useSelector((state) => state.todos.todo);
  // console.log("in APP")
  // console.log(todos)

  useEffect(() => {
    console.log("call pi")
    dispatch(getTodoListRequest());
  },[])

  useEffect(() => { 
    console.log("effect success")
    dispatch(showTodoList())
  },[todos])
  
  const handleSubmit = (content, event) => {
    event.preventDefault();
    // console.warn(event.target.value)
    dispatch(addReq(content));
    clearForm();
  };

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(getDeleteReq(id));
  };

  const handleCheck = (item) => {
    dispatch(checked(item));
  }

  const handleOnDragEnd = (res) => {
    const source = res.source.index;
    const destination = res.destination.index;
    if (source !== destination)
      dispatch(onDragEnd(source, destination));
  }



  return (


    <div className="app">
      <InputField
      job={job}
      setJob={setJob}
      handleSubmit={handleSubmit}
      ></InputField>
      <div id="content">
        <TodoList 
          todos = {todos}
          handleDelete = {handleDelete}
          handleCheck = {handleCheck}
          handleOnDragEnd = {handleOnDragEnd}
        ></TodoList>
      </div>
    </div>
  );
};

export default App;
