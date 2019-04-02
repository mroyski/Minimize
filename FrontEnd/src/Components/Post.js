import React, { Component } from "react";

class Post extends Component {
  render() {
    const {
      postId,
      totalItems,
      removedItems,
      postDescription,
      postImgPath
    } = this.props;
    return (
      <li>
        <h4>Post Number: {postId}</h4>
        <p>Total Items: {totalItems}</p>
        <p>Removed Items: {removedItems}</p>
        <p>Description: {postDescription}</p>
        <img src={postImgPath} />
      </li>
    );
  }
}

export default Post;
