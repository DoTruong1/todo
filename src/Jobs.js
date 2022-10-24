import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import{BiTrash} from 'react-icons/bi'
import './App.css';
import { Draggable } from 'react-beautiful-dnd';





const Job = ({item, handleCheck, index, handleDelete}) => {
    return (
        // <Draggable key = {item.id} draggableId={item.id.toString()} index ={index}>
        //         {(provided) => (
        //         <Container
        //             ref={provided.innerRef}
        //             {...provided.draggableProps}
        //             {...provided.dragHandleProps}
        //             style = {{display:'flex'}}
        //         >
            <React.Fragment>
                    <input 
                    className = "form-check-input me-1"
                    value = {item.content} 
                    type = "checkbox"
                    style={{ alignSelf :"center"}}
                    // {...[provied.draggableProps]}
                    // {...provied.dragHandleProps}
                    // innerRef = {provied.innerRef}
                    onChange = { () => handleCheck(index)}     
                />
                <span id ="detail">{item.content}</span>
                <Button id = "trash-icon" variant="danger primary" size="sm" onClick={() => handleDelete(index)}><BiTrash></BiTrash></Button>
                </React.Fragment>
            //     </Container>   
            //     )}
            // </Draggable>

    );
}
 
export default Job;