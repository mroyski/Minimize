import React, { Component } from "react";
import Post from "./Post";
import CreatePost from "./Library/CreatePost";
import "./Category.css";

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

           <div className="detailName">
            <h2>{categoryName}</h2>
           </div>
            <p>{categoryDescription}</p>
        </div>
        <div className="postBody">
          <ul>{listOfPosts}</ul>
        </div>
          <CreatePost
            categoryId={categoryId}
            postImgPath={this.props.postImgPath}
            addPost={this.props.addPost}
            onSuccess={onSuccess}
            onError={onError}
          />
      </div>
    );
  }
}

export default Category;
