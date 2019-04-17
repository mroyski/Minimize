import React, { Component } from "react";
// import "./Posts.css";

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

    var moment = require("moment");
    return (
      <li className="post-list">
        <div id="postDetails">
          <div className="post">
            <div className="post-info">
              {/* <h4>Post Number: {this.props.post.postId}</h4> */}
              <p>{moment().format("L")}</p>
              <p>Removed Items: {removedItems}</p>
              <p>Description: {postDescription}</p>
            </div>
            <div className="post-img">
              <img src={postImgPath} alt="User Photo" />
            </div>
          </div>
          <div className="post-button">
            <button onClick={() => this.removePost(postId)}>Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Post;
