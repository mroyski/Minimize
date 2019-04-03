import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./CategoryIndex.css";

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
      <li>
        {item.categoryName}
        <img src={item.categoryImg} alt="CategoryImages" />
      </li>
    ));
    return (
      <div className="Body">
        <ul>
          {listOfCategories}
          <Link to="/category/index">Categories</Link>
        </ul>
      </div>
    );
  }
}

export default CategoryIndex;
