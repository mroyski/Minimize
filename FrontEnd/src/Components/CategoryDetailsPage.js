import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GetPost } from "./Library/HelperFunctions";
import Category from "./Category";

class CatDetails extends Component {
  constructor() {
    super();
    this.state = {
      category: { posts: [] },
      totalItems: 0,
      removedItems: 0,
      postDescription: "",
      postImgPath: ""
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
  //     postDescription: this.state.postDescription,
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

  setRemovedItems = newRemoved => {
    this.setState({ removedItems: newRemoved });
  };

  setPostDescription = newInfo => {
    this.setState({ postDescription: newInfo });
  };

  onSetTotalItems = e => {
    this.setTotalItems(e.target.value);
  };

  onSetRemovedItems = e => {
    this.setRemovedItems(e.target.value);
  };

  onSetPostDescription = e => {
    this.setPostDescription(e.target.value);
  };

  render() {
    const category = this.state.category;

    return (
      <Category
        categoryName={category.categoryName}
        categoryDescription={category.categoryDescription}
        posts={category.posts}
        totalItems={this.state.totalItems}
        removedItems={this.state.removedItems}
        postDescription={this.state.postDescription}
        postImgPath={this.state.postImgPath}
        onSetTotalItems={this.onSetTotalItems}
        onSetRemovedItems={this.onSetRemovedItems}
        onSetPostDescription={this.onSetPostDescription}
        addPost={this.addPost}
      />
    );
  }
}

export default CatDetails;
