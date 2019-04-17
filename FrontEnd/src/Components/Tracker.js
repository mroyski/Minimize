import React, { Component } from 'react';
import { Line } from 'rc-progress';

export class Tracker extends Component {
  render() {
    const {
      percentageComplete,
      goalTotalItemsToRemove,
      goalTotalItemsActuallyRemoved
    } = this.props;
    const goalComplete =
      goalTotalItemsActuallyRemoved >= goalTotalItemsToRemove;
    const showProgress = goalTotalItemsToRemove > 0 && !goalComplete;
    const haveGoal = goalTotalItemsToRemove > 0;
    const progressBar = (
      <Line
        percent={percentageComplete}
        strokeWidth="2"
        strokeColor="#003F9E"
      />
    );
    return (
      <div>
        {haveGoal && !goalComplete ? (
          <div>
            <h1>
              Removed: {goalTotalItemsActuallyRemoved} | Goal:{' '}
              {goalTotalItemsToRemove}
            </h1>
            {showProgress ? progressBar : ' '}
          </div>
        ) : (
          <div>You should add a goal!</div>
        )}
      </div>
    );
  }
}

export default Tracker;
