import React, { Component } from 'react';

export default class CreatePost extends Component {
  onAddPost = event => {
    event.preventDefault();
    const post = {
      postId: this.props.postId,
      totalItems: this.totalItems.value,
      removedItems: this.removedItems.value,
      postDescription: this.postDescription.value,
      postImgPath: this.postImgPath.value,
      categoryId: this.props.categoryId
    };
    this.props.addPost(post);
    this.postForm.reset();
  };

  render() {
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
        <input
          type="text"
          placeholder="postImgPath "
          ref={input => (this.postImgPath = input)}
        />

        <button type="submit">Add Post</button>
      </form>
    );
  }
}
