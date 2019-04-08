import React, { Component } from "react";
import "./Posts.css"


class Post extends Component {
  deletePost = id => {
    fetch(`https://localhost:44387/api/post/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (res.ok) {
          console.log("Deleting  post");
        }
      })
      .catch(err => {
        console.error(err);
      }).then(window.location.reload());
  };
  editPost = event => {
    this.props.editPost(event);
  };

  render() {
    const {
      postId,
      totalItems,
      removedItems,
      postDescription,
      postImgPath,
      deletePost
    } = this.props.post;
    return (
      
      <li >
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
