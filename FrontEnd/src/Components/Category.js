import React, { Component } from "react";
import Post from "./Post";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Category extends Component {
  render() {
    const {
      categoryName,
      categoryDescription,
      categoryImg,
      posts
    } = this.props;
    const listOfPosts = posts.map(post => (
      <Post
        postId={post.postId}
        totalItems={post.totalItems}
        removedItems={post.removedItems}
        postDescription={post.postDescription}
        postImgPath={post.postImgPath}
      />
    ));
    return (
      <div>
        <h2>{categoryName}</h2>
        <p>{categoryDescription}</p>
        <p>
          <img src={categoryImg} />
        </p>
        <ul>{listOfPosts}</ul>
      </div>
    );
  }
}

export default Category;
