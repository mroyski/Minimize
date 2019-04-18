import React, { Component } from "react";
import "./Goal.css";

export class Goal extends Component {
  render() {
    const { date, text, numberOfItems, category } = this.props;
    return (
      <div>
        <div className="newGoalContainer">
          <div className="newGoals">
            <p1>Date : {date}</p1>
            <p2>Category : {category.categoryName}</p2>
            <p>Description : {text}</p>   
            <p># of items to be removed : {numberOfItems}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goal;
