import React, { Component } from "react";
import Calendar from "./Calendar";
import GoalPost from "./GoalPost";
class GoalsPageContainer extends Component {
  render() {
    return (
      <div id="container">
        <Calendar />
      </div>
    );
  }
}

export default GoalsPageContainer;
