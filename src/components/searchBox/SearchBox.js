import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "../datePicker/DatePicker";
import { connect } from "react-redux";
import "./Search.css";
import { checkBusJouurneySatus } from "../../action";

class SearchBox extends React.Component {
  state = {
    start: "Gangtok",
    to: "",
    date: ""
  };
  setDate = date => this.setState({ date });

  handleChangeFrom = event => this.setState({ start: event.target.value });
  handleChangeTo = event => this.setState({ to: event.target.value });
  onChange = (jsDate, dateString) => {
    // ...
  };

  handleSearchBus = () => {
    let send = false;
    if (this.state.start && this.state.to && this.state.date) {
      send = true;
    }
    if (send) {
      this.props.checkBusJouurneySatus(this.state);
    } else {
      console.log("error invalid form");
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="search-box">
        <h4>FROM</h4>
        <div>
          <select value={this.state.start} onChange={this.handleChangeFrom}>
            <option value="Gangtok">GANGTOK</option>
            <option value="Rumtek">RUMTEK</option>
            <option value="Namchi">NAMCHI</option>
          </select>
        </div>
        <h4>To</h4>
        <div>
          <select value={this.state.to} onChange={this.handleChangeTo}>
            <option value="Gangtok">GANGTOK</option>
            <option value="Rumtek">RUMTEK</option>
            <option value="Namchi">NAMCHI</option>
          </select>
        </div>
        <DatePicker setDate={this.setDate} />
        <div className="button inline-block" onClick={this.handleSearchBus}>
          FIND
        </div>
      </div>
    );
  }
}

export default connect(null, { checkBusJouurneySatus })(SearchBox);
