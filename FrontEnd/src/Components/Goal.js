import React, { Component } from "react";

export class Goal extends Component {
  render() {
    const { date, text, numberOfItems, category } = this.props;
    return (
      <div className="goal-post">
        <p>Date : {date}</p>
        <p>Text : {text}</p>
        <p> CategoryName : {category.categoryName}</p>
        <p> Total items to be removed : {numberOfItems}</p>
      </div>
    );
  }
}

export default Goal;
