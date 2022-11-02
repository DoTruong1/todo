import React, { useEffect } from "react";
import "./css/App.css";
import { useState } from "react";
import Job from "./Jobs";
import "bootstrap/dist/css/bootstrap.min.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {add, remove, checked, onDragEnd} from "./actions/actions";


const App = () => {
  const [job, setJob] = useState("");

  function clearForm() {
    setJob('');
  }
  
  const cardList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(add(job));
    clearForm();
  };

  const handleDelete = (item) => {
    console.log(item);
    dispatch(remove(item));
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


  const listGen = cardList.map((item, index) => (
    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          className="container"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Job
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            onChecked={handleCheck}
          ></Job>
        </div>
      )}
    </Draggable>
  ));

  return (
    <div className="app">
      <div>
      <form id="input-job" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={job}
          className="form-control"
          onChange={(event) => setJob(event.target.value)}
          placeholder="What do you want to do ;)"
          // aria-label="Recipient's username"
          aria-describedby="button-addon2"
        ></input>
        <button
          id="button-addon2"
          className="btn btn-outline-secondary"
          type="submit"
        >
          Add
        </button>
        </form>
      </div>

      <div id="content">
        <DragDropContext
          id="content"
          onDragEnd={handleOnDragEnd}
        >
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className="list-group list-group-flush"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: "100%", marginTop: "8px" }}
              >
                {listGen}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
