const initialState = []

const errorsReducer = (state=initialState, action) => {
  console.log('errorsReducer', state, action);
  switch(action.type) {
    case "ERRORS":
      const newErrors = Object.assign([], state);
      newErrors.push(action.payload);
      return newErrors;
    case "CLEAR_ERRORS":
      return initialState;
    default:
      return state;
  }
}

export default errorsReducer;