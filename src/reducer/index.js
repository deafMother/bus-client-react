import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { loggedIn } from "./loggedInReducer";
import { bussesForDate } from "./busStatusForDate";

const rootReducer = combineReducers({
  form: formReducer,
  loggedIn,
  bussesForDate
});

export default rootReducer;
