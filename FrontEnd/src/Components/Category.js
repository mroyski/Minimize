import React, { Component } from "react";
import Post from "./Post";

class Category extends Component {
  render() {
    const {
      categoryName,
      categoryDescription,
      posts,
      totalItems,
      itemsRemoved,
      postDescription,
      postImgPath,
      onSetTotalItems,
      onSetItemsRemoved,
      onSetPostDescription,
      onSetImgPath
    } = this.props;
    const listOfPosts = posts.map(post => <Post post={post} />);
    return (
      <div>
        <div>
          <h2>{categoryName}</h2>
          <p>{categoryDescription}</p>
          <div>
            <div>
              <label>Total Items: </label>
              <input
                type="text"
                value={totalItems}
                onChange={onSetTotalItems}
              />
            </div>
          </div>
          <ul>{listOfPosts}</ul>
        </div>
      </div>
    );
  }
}

export default Category;
