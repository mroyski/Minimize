import React, { Component } from "react";
import Post from "./Post";
import CreatePost from "./Library/CreatePost";
import "./Category.css";
import Goal from "./Goal";
import GoogleMaps from "./MapContainer";
import Tracker from "./Tracker";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      tracker: {}
    };
  }
  componentDidMount() {
    const { categoryId } = this.props;
    fetch(`https://localhost:44387/api/tracker/${categoryId}`)
      .then(res => res.json())
      .then(data => this.setState({ tracker: data }));
  }

  render() {
    const {
      categoryId,
      categoryName,
      categoryDescription,
      posts,
      onSuccess,
      onError,
      formModal,
      closeModal,
      deletePost
    } = this.props;

    console.log(this.state.tracker);
    const listOfPosts = posts.map(post => (
      <Post key={post.postId} post={post} deletePost={deletePost} />
    ));

    return (
      <div id="detailContainer">
        <div className="detailBody">
          <div className="detailName">
            <h2>{categoryName}</h2>
          </div>
          <Tracker {...this.state.tracker} />

          <p id="catDescrip">{categoryDescription}</p>
          <button onClick={formModal}>Create Post</button>
        </div>
        <div className="create-post">
          <CreatePost
            categoryId={categoryId}
            postImgPath={this.props.postImgPath}
            addPost={this.props.addPost}
            onSuccess={onSuccess}
            onError={onError}
            closeModal={closeModal}
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
