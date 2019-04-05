import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GetPost } from "./Library/HelperFunctions";
import Category from "./Category";

class CatDetails extends Component {
  constructor() {
    super();
    this.state = {
      category: { posts: [] },
      totalItems: null,
      itemsRemoved: null,
      postDescription: "",
      postImgPath: null
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://localhost:44387/api/category/${params.categoryId}`)
      .then(res => res.json())
      .then(json => this.setState({ category: json }));
  }

  // addPost = newCategoryId => {
  //   const newPost = {
  //     categoryId: newCategoryId,
  //     totalItems: this.state.totalItems,
  //     removedItems: this.state.removedItems,
  //     postImgPath: this.state.postImgPath
  //   };
  //   fetch("https://localhost:44387/api/post/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newPost)
  //   }).then(res => {
  //     if (res.ok) {
  //       const addNewPost = [...this.state.category.posts, newPost];
  //       const addedNewPost = this.state.category;
  //       addedNewPost.posts = addNewPost;

  //       const updateCategory = this.state.category;
  //       updateCategory = addedNewPost;
  //       this.setState({ category: updateCategory });
  //     }
  //   });
  // };

  setTotalItems = newTotal => {
    this.setState({ totalItems: newTotal });
  };

  setItemsRemoved = newRemoved => {
    this.setState({ itemsRemoved: newRemoved });
  };

  setPostDescription = newInfo => {
    this.setState({ postDescription: newInfo });
  };

  setImgPath = newPath => {
    this.setState({ postImgPath: newPath });
  };

  onSetTotalItems = e => {
    setTotalItems(e.target.value);
  };

  onSetItemsRemoved = e => {
    setItemsRemoved(e.target.value);
  };

  onSetPostDescription = e => {
    setPostDescription(e.target.value);
  };

  onSetImgPath = e => {
    setImgPath(e.target.value);
  };

  render() {
    const category = this.state.category;

    return (
      <Category
        categoryName={category.categoryName}
        categoryDescription={category.categoryDescription}
        posts={category.posts}
        onSetTotalItems={this.onSetTotalItemsChange}
        onSetItemsRemoved={this.onSetItemsRemoved}
        onSetPostDescription={this.onSetPostDescription}
        onSetImgPath={this.onSetImgPath}
      />
    );
  }
}

export default CatDetails;
