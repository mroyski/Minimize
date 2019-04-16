import React, { Component } from 'react';

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
          {goalTotalItemsActuallyRemoved}{' '}
        </h1>
      </dov>
    );
  }
}

export default Tracker;
