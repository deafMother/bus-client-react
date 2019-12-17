import React from "react";
import { connect } from "react-redux";
import moment from "moment";

function Bus(props) {
  let { number, startTime, totalSeats, bookedSeats } = props.bus;
  return (
    <div className="bus">
      <p>Bus Number : {number}</p>
      <p>Departure Time : {moment(startTime).calendar()}</p>
      <p
        className={`${
          totalSeats >= bookedSeats.length &&
          moment().isBefore(moment(startTime))
            ? "available"
            : "not__available"
        }`}
      >
        {totalSeats >= bookedSeats.length &&
        moment().isBefore(moment(startTime))
          ? "Available"
          : "Not Available"}
      </p>
    </div>
  );
}

export default connect(null)(Bus);
