import React, { Component } from "react";
import Category from "./Category";

class CatDetails extends Component {
  constructor() {
    super();
    this.state = {
      category: { posts: [{}] },
      totalItems: 0,
      removedItems: 0,
      postDescription: "",
      postImgPath: ""
    };
  }
  componentDidMount() {
    const { params } = this.props.match;
    fetch(`https://localhost:44387/api/category/${params.categoryId}`)
      .then(res => res.json())
      .then(json => this.setState({ category: json }));
  }

  addPost = post => {
    fetch("https://localhost:44387/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => {
        if (res.ok) {
          const currentPosts = [...this.state.category.posts, post];
          const addNewPost = currentPosts;
          this.setState({ posts: addNewPost });
        }
      })
      .then(window.location.reload());
  };
  updatePost = post => {
    const currentPosts = [...this.state.category.posts, post];
    console.log(post);
  };
  deletePost = post => {
    console.log(post);
  };
  fileSelect = e => {
    console.log(e.target);
  };

  render() {
    return (
      <Category
        categoryId={this.props.match.params.categoryId}
        categoryName={this.state.category.categoryName}
        categoryDescription={this.state.category.categoryDescription}
        posts={this.state.category.posts}
        totalItems={this.state.totalItems}
        removedItems={this.state.removedItems}
        addPost={this.addPost}
        editPost={this.updatePost}
        fileSelect={this.fileSelect}
      />
    );
  }
}

export default CatDetails;
