import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllBus, logOut, checkLoginStatus } from "../../action";
import history from "../../history";

function Header(props) {
  useEffect(() => {
    props.checkLoginStatus();
  }, []);
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <i className="fas fa-bus-alt"></i>{" "}
      </div>
      <div>
        {props.loggedIn ? (
          <span
            className="button"
            onClick={() => {
              props.logOut();
              history.push("/");
            }}
          >
            Logout
          </span>
        ) : (
          <span
            className="button"
            onClick={() => history.push("/registerLogin")}
          >
            LogIn/SignUp
          </span>
        )}
      </div>
    </div>
  );
}

let mapStateToProps = state => {
  console.log(state.loggedIn);
  return {
    loggedIn: state.loggedIn
  };
};
export default connect(mapStateToProps, {
  getAllBus,
  logOut,
  checkLoginStatus
})(Header);
