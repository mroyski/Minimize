import React, { Component } from "react";
import CategoryIndex from "./Components/CategoryIndex";
import CatDetailsPage from "./CatDetailsPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <Route path="/" exact component={Category} />
        <Route path="/category/index" component={CatDetails} />
      </div>
    </Router>
  );
}

export default AppRouter;
