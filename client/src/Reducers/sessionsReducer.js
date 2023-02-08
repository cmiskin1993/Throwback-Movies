const initialState = {

    currentUser: {}, 
    updateUser: false


}

const sessionsReducer = (state=initialState, action) => {
  console.log(state, 'state')
  console.log(action.type)
    switch(action.type) {
      case "SIGNUP":
        return {
          currentUser: action.payload,
          updateUser: true
        }
      case "LOGOUT":
        console.log('Sessions Reducer:', action)
        return initialState;

       case "LOGIN":
        return {
          currentUser: action.payload,
          updateUser: true
        } 
      default:
        return state;
    }
  }

export default sessionsReducer;
