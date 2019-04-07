import React, { Component } from 'react';
import Categor from "./CategoryDetailsPage";

class Post extends Component {
  state ={
    selectedFile: null
  }
  deletePost = id => {
    fetch(`https://localhost:44387/api/post/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          console.log('Deleting  post');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  editPost = event => {
    this.props.editPost(event);
  };
  filSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })     
  };
  fileUploadHandler = (addPost) =>{
    
    console.log();
  };  
  
  render() {
    const {
      postId,
      totalItems,
      removedItems,
      postDescription,
      postImgPath
    } = this.props.post;
    return (
      <li>
        <h4>Post Number: {this.props.post.postId}</h4>
        <p>Total Items: {totalItems}</p>
        <p>Removed Items: {removedItems}</p>
        <p>Description: {postDescription}</p>
        <img src={postImgPath} />
        <input type="file" onChange={this.filSelectedHandler}></input>
        <button onClick={this.fileUploadHandler}></button>
        <button onClick={() => this.deletePost(postId)}>Delete</button>
        <button onClick={() => this.editPost(postId)}>Edit</button>
      </li>
    );
  }
}
export default Post;
