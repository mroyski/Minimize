import React, { Component } from "react";
import Post from "./Post";
import "./ProfilePage.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
library.add(faMedal);

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch(`https://localhost:44387/api/post`)
      .then(res => res.json())
      .then(json => this.setState({ posts: json }));
  }
  render() {
    const listOfPosts = this.state.posts.map(post => (
      <Post key={post.postId} post={post} />
    ));
    return (
      <div>
        <h1>Your Profile</h1>
        <div className="ProgressSection">
          <h2>Progress</h2>
        </div>
        <div className="BadgesSection">
          <h2>Badges</h2>
          <p>First Time Poster!</p>
          <p>
            <FontAwesomeIcon icon="medal" />
          </p>
        </div>
        <div className="PostSection">
          <h2>Posts</h2>
        </div>
        <ul>{listOfPosts}</ul>
      </div>
    );
  }
}

export default ProfilePage;
