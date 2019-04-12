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
    const currentGoals = [...this.state.goals, goal];

    this.setState({ goals: currentGoals });
    console.log(this.state.goals);
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
