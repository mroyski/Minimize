import React, { Component } from "react";

export default props => {
  const profilePosts = props.posts.map(post => (
    <div id="postDetails">
      {/* <h4>Post Number: {this.props.post.postId}</h4> */}
      <p>Time: {post.postTime}</p>
      <p>Total Items: {post.totalItems}</p>
      <p>Removed Items: {post.removedItems}</p>
      <p>Description: {post.postDescription}</p>
      <img src={post.postImgPath} alt="UserPhoto" />
    </div>
  ));
  return <div>{profilePosts}</div>;
};
