import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Job from "../jobs";
import './App.css'

const TodoList = ({todos, handleDelete, handleCheck, handleOnDragEnd}) => {
    console.log(todos)
    const listGen = () => {
        const res = todos.map((item, index) => 
          ( 
            <Job    
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                    onChecked={handleCheck}
            ></Job>
          )
        );
          return res;
    }
        
    
    return (
        <DragDropContext
          onDragEnd={handleOnDragEnd}
          id="content"
        >
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                className="list-group list-group-flush"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ width: "100%", marginTop: "8px" }}
              >
                
                {listGen()}
                {/* <li>TEST</li> */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    )
}

export default TodoList;