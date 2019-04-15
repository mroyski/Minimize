import React, { Component } from 'react';

export class Goal extends Component {
  render() {
    const categories = Object.assign([], this.props.category);
    const categoryName = categories.categoryName;
    const { date, text, numberOfItems } = this.props;
    return (
      <div>
        <p>Date : {date}</p>
        <h2>Text : {text}</h2>
        <h3> CategoryName : {categoryName}</h3>
        <h1>Sum of Removed Items : {numberOfItems}</h1>
      </div>
    );
  }
}

export default Goal;
