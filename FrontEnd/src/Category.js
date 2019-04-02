import React, { Component } from "react";
import Post from "./Components/Post";

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
        <h2>{categoryName}</h2>
        <p>{categoryDescription}</p>
        <ul>{listOfPosts}</ul>
      </div>
    );
  }
}

export default Category;
