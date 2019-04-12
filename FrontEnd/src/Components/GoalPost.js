import React, { Component } from 'react';
import './GoalPost.css';

class GoalPost extends Component {
  onAddGoal = e => {
    e.preventDefault();
    const { pickedDay, pickedMonth, pickedYear } = this.props;
    const goal = {
      date: `${pickedMonth} / ${pickedDay} / ${pickedYear}`,
      goalMessage: this.goalMessage.value
    };

    this.props.createGoal(goal);
    this.goalForm.reset();
  };
  render() {
    const { pickedDay, pickedMonth, pickedYear } = this.props;
    return (
      <div id="goalContainer">
        <h1>set a goal</h1>
        <div id="goalForm">
          <p>set the date</p>

          <p>
            <h3>
              {pickedMonth} / {pickedDay} / {pickedYear}
            </h3>
          </p>
          <form
            ref={input => (this.goalForm = input)}
            onSubmit={e => this.onAddGoal(e)}
          >
            <textarea ref={input => (this.goalMessage = input)} type="text" />
            <br />
            <button type="submit" onClick={e => this.onAddGoal(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalPost;
