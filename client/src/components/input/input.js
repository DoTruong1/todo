import React from "react";
import { join } from "redux-saga/effects";

export const InputField = ({job, setJob,handleSubmit }) => {
    return(
        <form id="input-job" onSubmit={(e) => {console.log(job); handleSubmit(job, e)}}>
        <input
          value = {job}
          type="text"
          className="form-control"
          placeholder="What do you want to do ;)"
          aria-describedby="button-addon2"
          onChange={(e) => {console.warn(e.target.value); setJob(e.target.value)}}
        ></input>
        <button
          id="button-addon2"
          className="btn btn-outline-secondary"
          type="submit"
        >
          Add
        </button>
        </form>
    )
}