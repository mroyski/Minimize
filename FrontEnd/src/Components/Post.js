import React, { Component } from 'react';
import './Posts.css';

class Post extends Component {
  removePost = postId => {
    this.props.deletePost(postId);
    console.log('hello world');
  };

  render() {
    const {
      postId,
      totalItems,
      removedItems,
      postDescription,
      postImgPath
    } = this.props.post;
    return (
      <li>
        <div id="postDetails">
          {/* <h4>Post Number: {this.props.post.postId}</h4> */}
          <p>Total Items: {totalItems}</p>
          <p>Removed Items: {removedItems}</p>
          <p>Description: {postDescription}</p>
          <img src={postImgPath} />

          <button onClick={() => this.deletePost(postId)}>Delete</button>
          <button onClick={() => this.editPost(postId)}>Edit</button>
        </div>
      </li>
    );
  }
}

export default Post;
