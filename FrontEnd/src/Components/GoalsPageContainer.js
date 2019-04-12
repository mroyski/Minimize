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
    fetch(`https://localhost:44387/api/goal`)
      .then(res => res.json())
      .then(json => this.setState({ goals: json }));
  }
  createGoal = goal => {
    const currentGoals = [...this.state.goals, goal];

    this.setState({ goals: currentGoals });
    console.log(this.state.goals);
  };

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
