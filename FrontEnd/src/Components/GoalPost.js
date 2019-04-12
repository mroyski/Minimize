import React, { Component } from 'react';
import './GoalPost.css';

class GoalPost extends Component {
  constructor() {
    super();
    {
      const goal = {
        date: '',
        goalMessage: ''
      };
    }
  }
  AddGoal = () => {
    const goal = {
      totalItems: this.totalItems.value,
      date: ''
    };
  };

  render() {
    const { pickedDay, pickedMonth, pickedYear, setGoalPost } = this.props;

    return (
      <div id="goalContainer">
        <h1>set a goal</h1>
        <div id="goalForm">
          <p>set the date</p>{' '}
          <form >
            <p>
              <label>
                {pickedMonth} / {pickedDay} / {pickedYear}{' '}
              </label>
            </p>
            <textarea id="goalText" type="text" />
            <br />
            <button type="submit" onClick={setGoalPost}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default GoalPost;
