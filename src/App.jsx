import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Job from './Jobs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';


const INITIALIZEJOBS = [
  {
    id: '1',
    content: "Job1",
    status: 'isNotDone'
  },
  {
    id: '2',
    content: "Job2",
    status: 'isNotDone'
  },
  {
    id: '3',
    content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    status: 'isNotDone'
  },
]
const App = () => {
  
  const [job, setJob] = useState ('');
    const [cardList, setCardList] = useState(INITIALIZEJOBS);
    
  const handleCheck = (event, item, index) => {
      const newStatus = item.status === 'done' ? 'isNotDone' : 'done';
      const newState = cardList.map((items, position) => {
        if (position === index) {
          return ({...items, status: newStatus})
        }
        return items;
      });
      // console.log(newState);
      setCardList(newState);
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(job)
    // alert(`The name you entered was: ${job}`)
    var updatedList = [...cardList];
    var newJob = {id: uuidv4(), content: job, status: false}
    if (job) {
      updatedList.splice(0,0,newJob)
      // setCardList((cardList) => [...updatedList, job])
      setCardList(cardList => updatedList)
    }
    setJob('')
  }

  const handleDelete = (position) => {
    var updatedList = [...cardList];
    if (position !== -1) {
      updatedList.splice(position, 1);
      setCardList(cardList => updatedList);
    }
  }

  useEffect(() => {
    console.log(cardList);
  }, [cardList])

  const listGen = cardList.map((item, index) => 
          <Draggable key = {item.id} draggableId={item.id.toString()} index ={index}>
                {(provided) => (
                    <div
                      className = "container"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}> 
                      <Job
                          key={item.id}
                          item={item}
                          index = {index}
                          onChange={handleCheck}
                          handleDelete = {handleDelete}
                        ></Job>   
                    </div>              
                )}
            </Draggable>
                    
      )


  const handleOnDragEnd = (res) => {
    const items = [...cardList];
    const [reorderedItem] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reorderedItem);

    setCardList(items);
  }
  return (
    <div className = "app">
      <form id = "input-job" onSubmit={handleSubmit}>
        <input 
              type="text"
              value = {job}
              className = "form-control" 
              onChange = {(event) => setJob(event.target.value)} 
              placeholder="What do you want to do ;)" 
              aria-label="Recipient's username" 
              aria-describedby="button-addon2">
        </input>
        <button className = "btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>

      </form>
      {/* {listGen()} */}
      <div id = "content">
        <DragDropContext id = "content" onDragEnd={handleOnDragEnd}>
        <Droppable droppableId = "droppable">
          {(provided) => (
            
            <div
              className = "list-group list-group-flush"

              {...provided.droppableProps}
              ref={provided.innerRef}
              style = {{width:"100%", marginTop:'8px'}}
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
}
 
export default App;


