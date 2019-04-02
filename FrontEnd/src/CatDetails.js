import React, { Component } from "react";

class CatDetails extends Component {
  render() {
    const { CategoryName, CategoryDescription } = this.props;
    return (
      <div>
        <div className="CategoryName">{CategoryName}</div>
        <div className="CatDecription">{CategoryDescription}</div>
      </div>
    );
  }
}

export default CatDetails;
