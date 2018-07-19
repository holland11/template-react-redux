import { NOP_ACTION } from "../constants/action-types";
import { combineReducers } from "redux";

const initialState = {
  test: "hi",
};

function nopReducer(state = initialState.test, action) {
  switch(action.type) {
    case NOP_ACTION:
      if (state.length > 6) {
        return initialState.test;
      }
      else {
        return state.concat("i");
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  test: nopReducer,
});

export default rootReducer;
