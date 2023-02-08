const initialState = []

const errorsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ERRORS":
      debugger
      return [].concat(state).push(action.payload);
    case "CLEAR_ERRORS":
      return initialState;
    default:
      return state;
  }
}

export default errorsReducer;