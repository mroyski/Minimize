import React, { Component } from "react";
import Post from "./Post";

class Category extends Component {
  render() {
    const {
      categoryId,
      categoryName,
      categoryDescription,
      posts,
      totalItems,
      removedItems,
      postDescription,
      onSetTotalItems,
      onSetRemovedItems,
      onSetPostDescription,
      addPost
    } = this.props;
    console.log(posts);
    const listOfPosts = posts.map(post => <Post post={post} />);
    return (
      <div>
        <div>
          <h2>{categoryName}</h2>
          <p>{categoryDescription}</p>
          <div>
            <h5>Add New Post</h5>
            <div>
              <div>
                <label>Total Items: </label>
                <input
                  type="text"
                  value={totalItems}
                  onChange={onSetTotalItems}
                />
              </div>
              <div>
                <label>Items Removed: </label>
                <input
                  type="text"
                  value={removedItems}
                  onChange={onSetRemovedItems}
                />
              </div>
              <div>
                <label>Description: </label>
                <input
                  type="text"
                  value={postDescription}
                  onChange={onSetPostDescription}
                />
              </div>
              <button onClick={() => addPost(categoryId)}>Post</button>
            </div>
          </div>
          <ul>{listOfPosts}</ul>
        </div>
      </div>
    );
  }
}

export default Category;
