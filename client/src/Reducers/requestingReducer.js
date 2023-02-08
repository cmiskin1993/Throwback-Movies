const initialState = true;

const requestingReducer = (state=initialState, action) => {
  switch(action.type) {
    case "REQUESTING":
      return true;
    case "DONE_REQUESTING":
      return false;
    default:
      return state;
  }
}

export default requestingReducer;
