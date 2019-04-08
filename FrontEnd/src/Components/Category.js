<<<<<<< HEAD
import React, { Component } from "react";
import Post from "./Post";
import CreatePost from "./Library/CreatePost";
=======
import React, { Component } from 'react';
import Post from './Post';
import CreatePost from './Library/CreatePost';
import "./Category.css"
>>>>>>> master

class Category extends Component {
  render() {
    const {
      categoryId,
      categoryName,
      categoryDescription,
      posts,
      editPost,
      fileSelect
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
<<<<<<< HEAD

        <CreatePost
          categoryId={categoryId}
          addPost={this.props.addPost}
          fileSelect={fileSelect}
        />
      </div>
=======
        </div>
        <CreatePost categoryId={categoryId} addPost={this.props.addPost} />
        
        </div>
>>>>>>> master
    );
  }
}

export default Category;
