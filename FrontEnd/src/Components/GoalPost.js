import React, { Component } from "react";
import "./GoalPost.css";

class GoalPost extends Component {
  render() {
    const { pickedDay, pickedMonth, pickedYear } = this.props;

    return (
      <div id="goalContainer">
        <h1>set a goal</h1>
        <div id="goalForm">
          <p>set the date</p>
          <p>
            {pickedMonth} / {pickedDay} / {pickedYear}
          </p>
          <textarea id="goalText" type="text" />
          <br />
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default GoalPost;
