import React, { Component } from "react";
import ReactFilestack from "filestack-react";

export default class CreatePost extends Component {
  onAddPost = event => {
    event.preventDefault();
    const post = {
      postId: this.props.postId,
      totalItems: this.totalItems.value,
      removedItems: this.removedItems.value,
      postDescription: this.postDescription.value,
      postImgPath: this.postImgPath,
      categoryId: this.props.categoryId
    };
    this.props.addPost(post);
    this.postForm.reset();
    console.log(this.postImgPath);
  };

  onSuccess = result => {
    this.setState({
      postImgPath: result.filesUploaded[0].url
    });
  };

  onError = error => {
    console.error("error", error);
  };

  render() {
    const basicOptions = {
      accept: "image/*",
      fromSources: ["local_file_system"],
      maxSize: 1024 * 1024,
      maxFiles: 1
    };
    const key = "A3wux2cFHQHGgvyu7UcKVz";
    return (
      <form
        ref={input => (this.postForm = input)}
        onSubmit={e => this.onAddPost(e)}
      >
        <input
          type="text"
          placeholder="totalItems "
          ref={input => (this.totalItems = input)}
        />
        <input
          type="text"
          placeholder="removedItems "
          ref={input => (this.removedItems = input)}
        />
        <input
          type="text"
          placeholder="postDescription "
          ref={input => (this.postDescription = input)}
        />
        <ReactFilestack
          apikey={key}
          options={basicOptions}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
        <button type="submit" onClick={() => this.onAddPost()}>
          Add Post
        </button>
      </form>
    );
  }
}
