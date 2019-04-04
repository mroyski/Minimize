import React, { Component } from "react";
import Category from "./Category";
import Post from "./Post";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GetById } from "./Library/HelperFunctions";

class CatDetails extends Component {
  constructor() {
    super();
    this.state = {
      category: { posts: [] }
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    GetById(params.categoryId)
      .then(res => res.json())
      .then(json => this.setState({ category: json }));
  }

  render() {
    const category = this.state.category;

    return (
      <Category
        categoryName={category.categoryName}
        categoryDescription={category.categoryDescription}
        posts={category.posts}
      />
    );
  }
}

export default CatDetails;
