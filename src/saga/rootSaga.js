import { put, takeEvery, all } from "redux-saga/effects";

import history from "../history";
import axios from "../api/index";

const getJWT = () => {
  let jwtToken = localStorage.getItem("token-bus-jwt");
  if (!jwtToken) {
    jwtToken = "";
  }
  var config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
      "Content-Type": "application/json"
    }
  };

  return config;
};

// get user info
function* getUserInfo() {
  try {
    const config = getJWT();
    const response = yield axios.get("/name", config); // this is the get all users request
    //console.log(response);
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: "GET_USER",
      error: false,
      data: response.data.data.user
    });
  } catch (err) {
    yield put({
      type: "GET_USER",
      error: true
    });
  }
}
// the token has to be verified while visiting every route, so the token has to be sent with every request
function* verifyToken(action) {
  try {
    const config = getJWT();
    const response = yield axios.get("/", config); // this is the get all users request
    //console.log(response);
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: "LOGGEDIN",
      error: false,
      token: response.data.token,
      status: true
    });
  } catch (err) {
    yield put({
      type: "LOGGEDIN",
      error: true,
      token: "",
      status: false
    });
  }
}

// login
function* login(action) {
  try {
    const response = yield axios.post("/user/login", action.data);
    localStorage.setItem("token-bus-jwt", response.data.token);
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: "LOGGEDIN",
      error: false,
      token: response.data.token,
      status: true
    });
  } catch (err) {
    console.log(err.message);
    yield put({
      type: "LOGGEDIN",
      error: true,
      token: "",
      status: false
    });
  }
}

// logout, note: the server is not processing the logout request, it can be implemented at the server end if required
function* logout() {
  try {
    localStorage.setItem("token-bus-jwt", "xxyyzzzz");
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: "LOGGEDIN",
      error: false,
      token: "",
      status: false
    });
  } catch (err) {
    yield put({
      type: "LOGGEDIN",
      error: true,
      token: "",
      status: false
    });
  }
}

// get user info
function* getAllBusInfo() {
  try {
    const response = yield axios.get("/getBus");
    console.log(response);
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: "GET_USER",
      error: false
    });
  } catch (err) {}
}
// login
function* register(action) {
  try {
    console.log(action.data);
    const response = yield axios.post("/user", action.data);
    localStorage.setItem("token-bus-jwt", response.data.token);
    console.log(response);
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: "LOGGEDIN",
      error: false,
      token: response.data.token,
      status: true
    });
  } catch (err) {
    yield put({
      type: "LOGGEDIN",
      error: true,
      token: "",
      status: false
    });
  }
}

/*  check login status
 */
function* verifyLoginStatus() {
  try {
    const config = getJWT();
    const response = yield axios.get("/user/checkLoginStatus", config); // this is the get all users request
    //console.log(response);
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: "LOGGEDIN",
      error: false,
      token: response.data.token,
      status: true
    });
  } catch (err) {
    yield put({
      type: "LOGGEDIN",
      error: true,
      token: "",
      status: false
    });
  }
}

// watch for the action types
function* watchSaga() {
  yield takeEvery("VERIFY_TOKEN", verifyToken);
  yield takeEvery("LOG_IN", login); //LOG_OUT
  yield takeEvery("LOG_OUT", logout);
  yield takeEvery("REGISTER", register);
  yield takeEvery("CHECK_LOGIN_STATUS", verifyLoginStatus);
  yield takeEvery("GET_USER_INFO", getUserInfo);
  yield takeEvery("GET_ALL_BUS", getAllBusInfo);
}

// only export the root sage
export default function* rootSaga() {
  yield all([watchSaga()]);
}
