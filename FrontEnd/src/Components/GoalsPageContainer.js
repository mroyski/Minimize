import React, { Component } from 'react';
import Calendar from './Calendar';
import Goal from './Goal.js';
class GoalsPageContainer extends Component {
  constructor() {
    super();
    {
      this.state = {
        goals: [{}]
      };
    }
  }
  componentDidMount() {
    fetch('https://localhost:44387/api/goal')
      .then(res => res.json())
      .then(data => this.setState({ goals: data }));
  }
  createGoal = goal => {
    const currentGoals = [...this.state.goals, goal];

    this.setState({ goals: currentGoals });
    console.log(this.state.goals);

    fetch('https://localhost:44387/api/goal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goal)
    }).then(res => {
      if (res.ok) {
        const currentGoals = [...this.state.goals, goal];
        const setNewGoal = Object.assign([], this.state.goals, {
          goals: currentGoals
        });
        this.setState({ goals: setNewGoal });
      }
    });
  };
  removeGoal = goalId => {};
  render() {
    const PrintGoal = this.state.goals.map(goal => (
      <Goal date={goal.date} text={goal.text} />
    ));
    return (
      <div id="container">
        <Calendar createGoal={this.createGoal} />
        {PrintGoal}
      </div>
    );
  }
}

export default GoalsPageContainer;
