import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { loggedIn } from "./loggedInReducer";

const rootReducer = combineReducers({
  form: formReducer,
  loggedIn
});

export default rootReducer;
