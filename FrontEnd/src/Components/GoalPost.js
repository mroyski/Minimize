import React, { Component } from "react";
// import "./GoalPost.css";

class GoalPost extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  onAddGoal = e => {
    e.preventDefault();
    const { pickedDay, pickedMonth, pickedYear } = this.props;
    const currentDate = `${pickedMonth} / ${pickedDay} / ${pickedYear}`;
    this.setState({ date: currentDate });
    const goal = {
      date: currentDate,
      text: this.state.text
    };

    this.props.createGoal(goal);
    this.goalForm.reset();
  };
  onTextAdd = event => {
    this.setState({ text: event.target.value });
  };
  render() {
    const { pickedDay, pickedMonth, pickedYear } = this.props;
    return (
      <div id="goalContainer">
        <h1>set a goal</h1>
        <div id="goalForm">
          <p>select date from calendar</p>
          <p>
            <h3>
              {pickedMonth} / {pickedDay} / {pickedYear}
            </h3>
          </p>
          <form
            ref={input => (this.goalForm = input)}
            onSubmit={e => this.onAddGoal(e)}
          >
            <textarea
              id="goalText"
              placeholder="Description"
              onChange={this.onTextAdd}
            />
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
