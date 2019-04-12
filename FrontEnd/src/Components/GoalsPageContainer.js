import React, { Component } from 'react';
import Calendar from './Calendar';
class GoalsPageContainer extends Component {
  constructor() {
    super();
    {
      this.state = {
        goals: [{}]
      };
    }
  }
  createGoal = goal => {
    console.log('CreateGoal');
    console.log(goal);
  };

  render() {
    return (
      <div id="container">
        <Calendar createGoal={this.createGoal} />
      </div>
    );
  }
}

export default GoalsPageContainer;
