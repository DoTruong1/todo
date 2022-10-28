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

export const remove = (todo) => {
  return {
    type: "REMOVE",
    todo: todo
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
