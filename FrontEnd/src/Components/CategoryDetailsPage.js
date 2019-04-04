import React, { Component } from "react";
import Category from "./Category";

export default props => {
  return (
    <Category
      categoryName={props.categoryName}
      categoryDescription={props.categoryDescription}
      posts={props.posts}
    />
  );
};
