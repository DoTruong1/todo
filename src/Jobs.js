import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import{BiTrash} from 'react-icons/bi'
import './App.css';

const Job = ({title, handleCheck, index, handleDelete}) => {
    return (
        <React.Fragment>
                    <input 
                        className = "form-check-input me-1"
                        value = {title} 
                        type = "checkbox"
                        onChange = { () => handleCheck(index)}     
                    />
                    <span id ="detail">{title}</span>
                    <Button id = "trash-icon" variant="danger primary" size="sm" onClick={() => handleDelete(index)}><BiTrash></BiTrash></Button>

        </React.Fragment>
    );
}
 
export default Job;