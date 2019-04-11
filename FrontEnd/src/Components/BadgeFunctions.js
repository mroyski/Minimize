import React, { Component } from "react";
import { GetAllPosts } from "./Library/HelperFunctions";

class BadgeFunctions extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    GetAllPosts().then(json => this.setState({ posts: json }));
  }

  render() {
    // Get Total Items Removed
    let itemsCount = 0;
    this.state.posts.map(item => (itemsCount += item.removedItems));
    console.log(itemsCount);

    return <div />;
  }
}

export default BadgeFunctions;
