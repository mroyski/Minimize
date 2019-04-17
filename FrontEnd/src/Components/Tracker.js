import React, { Component } from 'react';
import { Line } from 'rc-progress';

export class Tracker extends Component {
  changeNan = number => {
    if (isNaN(parseFloat(number))) {
      return 0;
    } else {
      return number;
    }
  };
  render() {
    const {
      percentageComplete,
      goalTotalItemsToRemove,
      goalTotalItemsActuallyRemoved
    } = this.props;

    return (
      <dov>
        <h1>
          Removed: {goalTotalItemsActuallyRemoved} | Goal:{' '}
          {goalTotalItemsToRemove}
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
