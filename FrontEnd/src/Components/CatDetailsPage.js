import React, { Component } from "react";
import Category from "./Category";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CatDetails extends Component {
  constructor() {
    super();
    this.state = {
      category: {}
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://localhost:44387/api/category/${params.categoryId}`)
      .then(res => res.json())
      .then(json => this.setState({ category: json }));
  }
  render() {
    const category = this.state.category;
    return (
      <div>
        <h2>{category.categoryName}</h2>
        <p>{category.categoryDescription}</p>
        <p>
          <img src={category.categoryImg} />
        </p>
      </div>
    );
  }
}

export default CatDetails;
