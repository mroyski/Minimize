import React, { Component } from "react";
import "./Goal.css";

export class Goal extends Component {
  render() {
    const { date, text, numberOfItems, category } = this.props;
    return (
      <div id="goalWrap">
        <p id="date">{date}</p>
        <p id="catName">{category.categoryName}</p>
        <p id="totalItems">
          Total items to be removed :{" "}
          <span className="blueText">{numberOfItems}</span>
        </p>
        <p>Comment :</p>
        <p id="text">{text}</p>
      </div>
    );
  }
}

export default Goal;
