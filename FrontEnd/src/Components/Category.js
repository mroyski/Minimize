import React, { Component } from "react";
import Post from "./Post";
import CreatePost from "./Library/CreatePost";
import "./Category.css";
import GoogleMaps from "./MapContainer";

class Category extends Component {
  render() {
    const {
      categoryId,
      categoryName,
      categoryDescription,
      posts,
      editPost,
      onSuccess,
      onError
    } = this.props;

    const listOfPosts = posts.map(post => (
      <Post key={post.postId} post={post} editPost={editPost} />
    ));

    return (
      <div id="detailContainer">
        <div className="detailBody">
          <h2>{categoryName}</h2>
          <p>{categoryDescription}</p>
        </div>
        <div className="postBody">
          <ul>{listOfPosts}</ul>

          <CreatePost
            categoryId={categoryId}
            postImgPath={this.props.postImgPath}
            addPost={this.props.addPost}
            onSuccess={onSuccess}
            onError={onError}
          />
        </div>
      </div>
    );
  }
}

export default Category;
