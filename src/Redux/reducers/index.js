import { combineReducers } from "redux";
import types from "../types"
import auth from "./auth";
import location from "./locations";

const appReducer = combineReducers({
  auth,
  location,
});

const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;