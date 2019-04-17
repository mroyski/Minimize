import React, { Component } from "react";
import ReactFilestack from "filestack-react";
// import './CreatePost.css';

export default class CreatePost extends Component {
  onAddPost = () => {
    const post = {
      totalItems: 1 /*this.totalItems.value*/,
      removedItems: this.removedItems.value,
      postDescription: this.postDescription.value,
      postImgPath: this.props.postImgPath,
      categoryId: this.props.categoryId
    };
    this.props.addPost(post);
    this.postForm.reset();
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
        id="form-container"
        ref={input => (this.postForm = input)}
        onSubmit={e => this.onAddPost(e)}
      >
        <h4>Add Post</h4>
        <div className="post-form">
          {/* <h1>{this.props.postImgPath}</h1> */}
          {/* <input
            type="text"
            placeholder="Total Items "
            ref={input => (this.totalItems = input)}
          /> */}
          <input
            type="text"
            placeholder="# of items to remove"
            ref={input => (this.removedItems = input)}
          />
          <textarea
            type="text"
            placeholder="Item(s) description"
            ref={input => (this.postDescription = input)}
          />

          <ReactFilestack
            className="file-picker"
            apikey={key}
            buttonText="Upload Photo"
            buttonClass="ui medium button gray"
            options={basicOptions}
            onSuccess={this.onSuccess}
            onError={this.onError}
          />
          <div className="form-buttons">
            <button type="submit" onClick={() => this.onAddPost()}>
              Add Post
            </button>
            <button onClick={this.props.closeModal}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}
