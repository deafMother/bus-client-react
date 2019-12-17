import React, { Component } from "react";
import { connect } from "react-redux";
import "./bus.css";
import Bus from "./Bus";

export class BussesForDate extends Component {
  render() {
    if (this.props.bussesForDate.length === 0) {
      return <h5>Search For Your Ride...</h5>;
    }
    return (
      <div>
        <h5>Availbale Busses</h5>
        <div>
          {this.props.bussesForDate.map(bus => {
            return <Bus key={bus._id} bus={bus} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.bussesForDate);
  return {
    bussesForDate: state.bussesForDate
  };
};
export default connect(mapStateToProps)(BussesForDate);
