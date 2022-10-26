import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import{BiTrash} from 'react-icons/bi'
import {FiTrash} from 'react-icons/fi'
import './App.css';
import { Draggable } from 'react-beautiful-dnd';
import { IconContext } from 'react-icons';





const Job = ({item, onChange, index, handleDelete}) => {
    return (
            <React.Fragment>
                <div>
                    <input 
                    status = {item.status}
                    item = {item}
                    id = {item.id}
                    className = "form-check-input me-1"
                    value = {item.content} 
                    type = "checkbox"
                    style={{ alignSelf :"center"}}
                    index = {index}
                    onChange = { (e) => onChange(e, item, index)}     
                    />
                </div>
                <div>
                    <span id={item.status !== 'done' ? 'detail' : 'detail-done'}>{item.content}</span>

                </div>
                <div style={{    marginLeft: 'auto', marginRight: '0px'}}>
                    <Button id = "trash-icon" variant="danger primary" size="sm" onClick={() => handleDelete(index)}>
                        <div>
                        <IconContext.Provider value={{color: 'black',   verticalAlign: 'bottom !important',     transform: 'scale(1.3) !important', width: '100%'}}>
                            
                            <FiTrash></FiTrash>
                        </IconContext.Provider>
                        </div>
                    </Button>
                </div>
                </React.Fragment>
    );
}
 
export default Job;