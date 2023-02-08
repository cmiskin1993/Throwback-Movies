import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import requestingReducer from "./requestingReducer";
import sessionsReducer from "./sessionsReducer";


export default combineReducers({
    errors: errorReducer,
    requesting: requestingReducer,
    sessions: sessionsReducer
})