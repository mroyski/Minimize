import React, { Component } from "react";
import Category from "./Category";
// import "./Styles/CatDetails.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CatDetailsPage extends Component {
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
      <Category
        categoryName={item.categoryName}
        categoryDescription={item.categoryDescription}
        categoryImg={item.categoryImg}
        posts={item.posts}
       
      />
    ));
    return <ul>{listOfCategories}</ul>;
  }
}

export default CatDetailsPage;
