import React, { Component } from "react";
import Calendar from "react-calendar";

class GoalsPage extends Component {
  state = {
    date: new Date()
  };
  onChange = date => this.setState({ date });
  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} value={this.state.date} />
        <div id="goalContainer">
          <p>Date: {this.state.date.day}</p>
        </div>
      </div>
    );
  }
}

export default GoalsPage;
