const initialState = [];

const moviesReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_MOVIES":
      return [...state, action.payload]
    case "SET_MOVIES":
      return action.payload
    default:
      return state;
  }
}

export default moviesReducer;