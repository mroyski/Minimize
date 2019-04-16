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
        <h1>{percentageComplete}</h1>
        <h1>{goalTotalItemsToRemove}</h1>
        <h1>{goalTotalItemsActuallyRemoved}</h1>
      </dov>
    );
  }
}

export default Tracker;
