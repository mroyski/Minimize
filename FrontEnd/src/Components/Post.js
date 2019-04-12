import React, { Component } from "react";
import "./Posts.css";

class Post extends Component {
  removePost = postId => {
    this.props.deletePost(postId);
  };

  render() {
    const {
      postId,
      postTime,
      totalItems,
      removedItems,
      postDescription,
      postImgPath
    } = this.props.post;
    return (
      <li>
        <div id="postDetails">
          {/* <h4>Post Number: {this.props.post.postId}</h4> */}
          <p>Time: {postTime}</p>
          <p>Total Items: {totalItems}</p>
          <p>Removed Items: {removedItems}</p>
          <p>Description: {postDescription}</p>
          <img src={postImgPath} alt="UserPhoto" />
          <button onClick={() => this.removePost(postId)}>Delete</button>
        </div>
      </li>
    );
  }
}

export default Post;
