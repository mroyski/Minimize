import React, { Component } from "react";
import CategoryIndex from "./Components/CategoryIndex";
import CatDetailsPage from "./Components/CatDetailsPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTshirt } from "@fortawesome/free-solid-svg-icons";
library.add(faTshirt);

function Category() {
  return <CategoryIndex />;
}

function CatDetails() {
  return <CatDetailsPage />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        Favorite Food: <FontAwesomeIcon icon="tshirt" />
        <Route path="/" exact component={Category} />
        <Route path="/category/index" component={CatDetails} />
      </div>
    </Router>
  );
}

export default AppRouter;
