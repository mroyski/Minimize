import React, { Component } from 'react';
import "./Goal.css";

export class Goal extends Component {
  render() {
    const { date, text, numberOfItems, category } = this.props;
    return (
      <div className="newGoalContainer">
        <div className="newGoals">
        <p>Date : {date}</p>
        <p>Text : {text}</p>
        <p> CategoryName : {category.categoryName}</p>
        <p> Total items to be removed : {numberOfItems}</p>
      </div>
      </div>
    );
  }
}

export default Goal;
