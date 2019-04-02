import React, { Component } from "react";

class CategoryIndex extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    fetch("https://localhost:44387/api/category")
      .then(res => res.json())
      .then(json => this.setState({ categories: json }));
  }
  render() {
    const listOfCategories = this.state.categories.map(item => (
      <li>{item.categoryName}</li>
    ));
    return <ul>{listOfCategories}</ul>;
  }
}

export default CategoryIndex;
