import React from 'react';
import './App.css';
import { useState } from 'react';
import Job from './Jobs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import{BiTrash} from 'react-icons/bi'


const INITIALIZEJOBS = [
  "Job1",
  "Job2",
  "Job3"
]
const App = () => {
  
  const [job, setJob] = useState ('');
  const [cardList, setCardList] = useState(INITIALIZEJOBS);
  const [checkedState, setCheckedState] = useState(
    new Array(INITIALIZEJOBS.length).fill(false)
  );
    
  const handleCheck = (position) => {
    const updatedCheckState = () => (checkedState.map(
      (item, index) => {
        return index === position ? !item : item;
      }
    ));

    setCheckedState(updatedCheckState);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${job}`)
    var updatedList = [...cardList];
    if (job) {
      updatedList.splice(0,0,job)
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

  const listGen = () => {
      return  <ol className = "list-group list-group-flush "> 
        {cardList.map((item, index) => 
          <React.Fragment>
            <li 
              key = {index}
              className="container list-group-item"
              style={{display: "flex"}}
            >
              
                <Job 
                  // key={index}
                  title={item}
                  index = {index}
                  handleCheck={handleCheck}
                  handleDelete = {handleDelete}
                ></Job>
            </li>
            {/* <Button variant="danger primary" size="sm" onClick={() => handleDelete(index)}><BiTrash></BiTrash></Button> */}
            </React.Fragment>
          )}
      </ol>
    }
     


  return (
    <div className = "app">
      <form id = "input-job" onSubmit={handleSubmit}>
        <input 
              type="text"
              value = {job}
              class="form-control" 
              onChange = {(event) => setJob(event.target.value)} 
              placeholder="What do you want to do ;)" 
              aria-label="Recipient's username" 
              aria-describedby="button-addon2">
        </input>
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>

      </form>
      
      <div id = "content">
        {listGen()}
      </div>
    </div>
  );
}
 
export default App;


