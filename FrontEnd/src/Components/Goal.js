import React, { Component } from 'react';

export class Goal extends Component {
  render() {
    const { date, text, numberOfItems, category } = this.props;
    return (
      <div>
        <p>Date : {date}</p>
        <h2>Text : {text}</h2>
        <h3> CategoryName : {category.categoryName}</h3>
        <h1> Total items to be removed : {numberOfItems}</h1>
      </div>
    );
  }
}

export default Goal;
