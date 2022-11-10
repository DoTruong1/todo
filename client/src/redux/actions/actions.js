import {Types} from './constant'

export const add = (content) => {
  console.log("action :" + content)
  return {
    type: "ADD",
    payload: content.trim()
  };
};

export const checked = (todo) => {
  return {
    type: "CHECKED",
    todo: todo
  };
};

export function remove (id) {
  console.log("run remove")
  return {
    type: Types.REMOVE,
    payload: {
      todoItemId: id
    }
  };
};

export const onDragEnd = (sourceIndex, destinationIndex) => {
  return {
    type: "ONDRAGEND",
    payload: {
      source: sourceIndex,
      destination: destinationIndex
    }
  }
}

// export const getTodoList = (data) => {
//   return {
//     type: GETLIST,
//     data  
//   }
// }

export function getTodoListRequest () {
  return {
    type: Types.GETLIST
  }
}

export function getTodoListSuccess(items) {
  console.log('success')
  console.log(items);
  return {
    type: Types.GET_LIST_SUCCESS,
    payload: {data: items}
  }
}

export function showTodoList(items) {
  return {
    type: Types.SHOW_TODO_lIST,
  }
}


export function getDeleteReq (id) {
  return {
    type: Types.DELETE_TODO_REQ,
    id
  } 
}

export const addReq = (detail) => {
  return {
    type: Types.ADD_REQUEST,
    detail
  }
} 