import React, { Component } from "react";

export class Goal extends Component {
  render() {
    const { date, text } = this.props;
    return (
      <div className="goal-post">
        <p>{date}</p>
        <h2>{text}</h2>
      </div>
    );
  }
}

export default Goal;
