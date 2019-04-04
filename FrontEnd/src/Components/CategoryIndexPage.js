import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./CategoryIndexPage.css";
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

class CategoryIndex extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    fetch("https://localhost:44387/api/category/")
      .then(res => res.json())
      .then(json => this.setState({ categories: json }));
  }
  render() {
    const categoryLinks = this.state.categories.map(item => (
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
  }
}

export default CategoryIndex;
