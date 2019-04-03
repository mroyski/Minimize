import React, { Component } from "react";
import Post from "./Post";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Category extends Component {
  render() {
    const { categoryName, categoryDescription, posts } = this.props;
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
        <Link to="/">
          <img src="https://cdn.shopify.com/s/files/1/0228/9021/products/IMG_2903_1024x1024.png?v=1540480930" />
        </Link>
        <h2>{categoryName}</h2>
        <p>{categoryDescription}</p>
        <ul>{listOfPosts}</ul>
      </div>
    );
  }
}

export default Category;
