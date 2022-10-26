/**
 *
For redux 
 return {
  ...state,
  (updates here)
}
For React
this.setState({
  updates here
})
*/

function reducer(state, action) {
  /*
    State looks like:

    state = {
      clicks: 0,
      count: 0
    }
  */

  return {
    ...state,
    clicks: state.clicks + 1,
    count: state.count + 1,
  };
}

//Update an Object in an Object
function reducer(state, action) {
  /*
      State looks like:
  
      state = {
        house: {
          name: "Ravenclaw",
          points: 17
        }
      }
    */

  // Two points for Ravenclaw
  return {
    ...state, // copy the state (level 0)
    house: {
      ...state.house, // copy the nested object (level 1)
      points: state.house.points + 2,
    },
  };
}

// Two depth level
function reducer(state, action) {
  /*
      State looks like:
  
      state = {
        school: {
          name: "Hogwarts",
          house: {
            name: "Ravenclaw",
            points: 17
          }
        }
      }
    */

  // Two points for Ravenclaw
  return {
    ...state, // copy the state (level 0)
    school: {
      ...state.school, // copy level 1
      house: {
        // replace state.school.house...
        ...state.school.house, // copy existing house properties
        points: state.school.house.points + 2, // change a property
      },
    },
  };
}

// Update by key
function reducer(state, action) {
  /*
      State looks like:
  
      const state = {
        houses: {
          gryffindor: {
            points: 15
          },
          ravenclaw: {
            points: 18
          },
          hufflepuff: {
            points: 7
          },
          slytherin: {
            points: 5
          }
        }
      }
    */

  // Add 3 points to Ravenclaw,
  // when the name is stored in a variable
  const key = "ravenclaw";
  return {
    ...state, // copy state
    houses: {
      ...state.houses, // copy houses
      [key]: {
        // update one specific house (using Computed Property syntax)
        ...state.houses[key], // copy that specific house's properties
        points: state.houses[key].points + 3, // update its `points` property
      },
    },
  };
}

//add item at the beginning
function reducer(state, action) {
  /*
      State looks like:
  
      state = [1, 2, 3];
    */

  const newItem = 0;
  return [
    // a new array
    newItem, // add the new item first
    ...state, // then explode the old state at the end
  ];
}

//add at the end
function reducer(state, action) {
  /*
      State looks like:
  
      state = [1, 2, 3];
    */

  const newItem = 0;
  return [
    // a new array
    ...state, // explode the old state first
    newItem, // then add the new item at the end
  ];
}
//at the end slice way

function reducer(state, action) {
  const newItem = 0;
  const newState = state.slice();

  newState.push(newItem);
  return newState;
}

// update and item with map
function reducer(state, action) {
  /*
      State looks like:
  
      state = [1, 2, "X", 4];
    */

  return state.map((item, index) => {
    // Replace "X" with 3
    // alternatively: you could look for a specific index
    if (item === "X") {
      return 3;
    }

    // Leave every other item unchanged
    return item;
  });
}

//update with object
function reducer(state, action) {
  /*
      State looks like:
  
      state = [
        {
          id: 1,
          email: 'jen@reynholmindustries.com'
        },
        {
          id: 2,
          email: 'peter@initech.com'
        }
      ]
  
      Action contains the new info:
  
      action = {
        type: "UPDATE_EMAIL"
        payload: {
          userId: 2,  // Peter's ID
          newEmail: 'peter@construction.co'
        }
      }
    */

  return state.map((item, index) => {
    // Find the item with the matching id
    if (item.id === action.payload.userId) {
      // Return a new object
      return {
        ...item, // copy the existing item
        email: action.payload.newEmail, // replace the email addr
      };
    }

    // Leave every other item unchanged
    return item;
  });
}
//update by index
function reducer(state, action) {
  /*
      State looks like:
  
      state = [1, 2, "X", 4];
    */

  return state.map((item, index) => {
    // Replace the item at index 2
    if (index === 2) {
      return 3;
    }

    // Leave every other item unchanged
    return item;
  });
}
//insert in middle of array

function reducer(state, action) {
  /*
      State looks like:
  
      state = [1, 2, 3, 5, 6];
    */

  const newItem = 4;

  // make a copy
  const newState = state.slice();

  // insert the new item at index 3
  newState.splice(3, 0, newItem);

  return newState;

  /*
    // You can also do it this way:
  
    return [                // make a new array
      ...state.slice(0, 3), // copy the first 3 items unchanged
      newItem,              // insert the new item
      ...state.slice(3)     // copy the rest, starting at index 3
    ];
    */
}

//remove
function reducer(state, action) {
  /*
      State looks like:
  
      state = [1, 2, "X", 4];
    */

  return state.filter((item, index) => {
    // Remove item "X"
    // alternatively: you could look for a specific index
    if (item === "X") {
      return false;
    }

    // Every other item stays
    return true;
  });
}
