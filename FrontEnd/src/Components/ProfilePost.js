import React, { Component } from "react";

export default props => {
  const { posts } = this.props;
  const profilePosts = posts.map(post => (
    <div id="postDetails">
      {/* <h4>Post Number: {this.props.post.postId}</h4> */}
      <p>Time: {postTime}</p>
      <p>Total Items: {totalItems}</p>
      <p>Removed Items: {removedItems}</p>
      <p>Description: {postDescription}</p>
      <img src={postImgPath} alt="UserPhoto" />
      <button onClick={() => this.removePost(postId)}>Delete</button>
    </div>
  ));
  return <div>{profilePosts}</div>;
};
