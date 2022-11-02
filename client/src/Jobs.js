import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import {FiTrash} from 'react-icons/fi'
import './css/App.css';
import { IconContext } from 'react-icons';





const Job = ({item, onChecked, handleDelete}) => {
    return (
            <React.Fragment>

                    <label className= "containerCheck">
                        <input
                            item = {item}
                            id = {item.id}
                    // c    lassName = "form-check-input me-1"
                            value = {item.content}
                            type = "checkbox"
                            style={{ alignSelf :"center"}}
                            onChange={() => onChecked(item)}
                        />
                    <span className= "checkmark" ></span>
                    </label >

                <div>
                    <span id={!item.completed ? 'detail' : 'detail-done'}>{item.content.trim()}</span>
                </div>
                <div style={{    marginLeft: 'auto', marginRight: '0px'}}>
                    <Button id = "trash-icon" variant="danger primary" size="sm" item={item} onClick={() => handleDelete(item)}>
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