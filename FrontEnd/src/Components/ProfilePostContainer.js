import React, { Component } from "react";
import { GetAllPosts } from "./Library/HelperFunctions";


class ProfilePostContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    GetAllPosts().then(json => this.setState(posts: json))
  }

  render() {
    return <div />;
  }
}

export default ProfilePostContainer;
