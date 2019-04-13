import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "./CategoryIndexPage.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faTruckMonster,
  faCouch,
  faLaptop,
  faQuestion,
  faTools
} from "@fortawesome/free-solid-svg-icons";
library.add(faTshirt, faTruckMonster, faCouch, faLaptop, faQuestion, faTools);

export default props => {
  const categoryLinks = props.categories.map(item => (
    <Link to={`/category/${item.categoryId}`}>
      <FontAwesomeIcon icon={item.categoryImg} />
      <p className="category-name">{item.categoryName}</p>
    </Link>
  ));
  return (
    <div id="CatIndexBody">
      <h1 className="header">Start by picking a category</h1>
      <ul className="category-links-container">
        <div className="category-links">{categoryLinks}</div>
      </ul>
    </div>
  );
};
