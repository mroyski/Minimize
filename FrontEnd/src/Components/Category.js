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
      onError,
      formModal
    } = this.props;

    const listOfPosts = posts.map(post => (
      <Post key={post.postId} post={post} editPost={editPost} />
    ));

    return (
      <div id="detailContainer">
        <div className="detailBody">
          <div className="detailName">
            <h2>{categoryName}</h2>
          </div>
          <p id="catDescrip">{categoryDescription}</p>
          <button onClick={formModal}>Add Post</button>
        </div>

        <div className="create-post">
          <CreatePost
            categoryId={categoryId}
            postImgPath={this.props.postImgPath}
            addPost={this.props.addPost}
            onSuccess={onSuccess}
            onError={onError}
          />
        </div>
        <div className="postBody">
          <ul>{listOfPosts}</ul>
        </div>
      </div>
    );
  }
}

export default Category;
