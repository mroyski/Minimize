import React, { Component } from 'react';
import './GoalPost.css';

class GoalPost extends Component {
  onAddGoal = e => {
    const { pickedDay, pickedMonth, pickedYear } = this.props;
    const goal = {
      date: `${pickedMonth} / ${pickedDay} / ${pickedYear}`,
      goalMessage: this.goalMessage.value
    };
    e.preventDefault();
    console.log(goal);
    this.props.createGoal(goal);
  };

  render() {
    const { pickedDay, pickedMonth, pickedYear } = this.props;

    return (
      <div id="goalContainer">
        <h1>set a goal</h1>
        <div id="goalForm">
          <p>set the date</p>{' '}
          <form>
            <p>
              <h3>
                {pickedMonth} / {pickedDay} / {pickedYear}{' '}
              </h3>
            </p>
            <textarea ref={input => (this.goalMessage = input)} type="text" />
            <br />
            <button onClick={event => this.onAddGoal(event)}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalPost;
