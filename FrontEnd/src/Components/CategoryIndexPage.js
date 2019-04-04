import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
import "./CategoryIndexPage.css";

library.add(faTshirt, faTruckMonster, faCouch, faLaptop, faQuestion, faTools);

export default props => {
  const categoryLinks = props.categories.map(item => (
    <Link to={`/category/${item.categoryId}`}>
      <FontAwesomeIcon icon={item.categoryImg} />
      <p>{item.categoryName}</p>
    </Link>
  ));
  return (
    <div className="CatIndexBody">
      <ul id="CatIndexUl">
        <div id="CatLists">{categoryLinks}</div>
      </ul>
    </div>
  );
};
