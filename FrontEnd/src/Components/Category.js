import React, { Component } from "react";
import Post from "./Post";

class Category extends Component {
  render() {
    const {
      categoryName,
      categoryDescription,
      categoryImg,
      posts
    } = this.props;
    const listOfPosts = posts.map(post => <Post post={post} />);
    return (
      <div>
        <h2>{categoryName}</h2>
        <p>{categoryDescription}</p>
        <img src={categoryImg} />
        <ul>{listOfPosts}</ul>
      </div>
    );
  }
}

export default Category;
