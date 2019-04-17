import React, { Component } from "react";
import { Line, Circle } from "rc-progress";

export class Tracker extends Component {
  render() {
    const {
      percentageComplete,
      goalTotalItemsToRemove,
      goalTotalItemsActuallyRemoved
    } = this.props;
    return (
      <dov>
        <h1>
          {percentageComplete} % {goalTotalItemsToRemove} |
          {goalTotalItemsActuallyRemoved}{" "}
        </h1>
        <Line
          percent={percentageComplete}
          strokeWidth="2"
          strokeColor="#003F9E"
        />
      </dov>
    );
  }
}

export default Tracker;
