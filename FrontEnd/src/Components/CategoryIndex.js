import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./CategoryIndex.css";
import CatDetailsPage from "./CatDetailsPage";

class CategoryIndex extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    fetch("https://localhost:44387/api/category/")
      .then(res => res.json())
      .then(json => this.setState({ categories: json }));
  }
  render() {
    const categoryLinks = this.state.categories.map(item => (
      <Link to={`/category/${item.categoryId}`}>
        <img src={item.categoryImg} />
      </Link>
    ));
    return (
      <div className="Body">
        <div>{categoryLinks}</div>
      </div>
    );
  }
}

export default CategoryIndex;
