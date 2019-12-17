// make seperate action files if this file gets to large

/* 
    fetch all buses info
*/
export const getAllBus = () => {
  return {
    type: "GET_ALL_BUS"
  };
};

/* 
  login request action 
 */

export const loginIn = formValue => {
  return {
    type: "LOG_IN",
    data: formValue
  };
};

/* logout request */
export const logOut = () => {
  return {
    type: "LOG_OUT"
  };
};

/* 
  register request action
 */

export const register = formValue => {
  return {
    type: "REGISTER",
    data: formValue
  };
};

/*  check login  status */
export const checkLoginStatus = () => {
  return {
    type: "CHECK_LOGIN_STATUS"
  };
};

/*  
  search for bus between start and destination
*/

export const checkBusJouurneySatus = formValue => {
  // console.log(formValue);
  return {
    type: "CHECK_BUS_JOURNEY_STATUS",
    data: formValue
  };
};
