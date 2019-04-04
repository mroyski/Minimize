import React, { Component } from "react";
import CategoryIndex from "./Components/CategoryIndexPage";
import CatDetailsPage from "./Components/CategoryDetailsPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={CategoryIndex} />
        <Route path="/category/:categoryId" component={CatDetailsPage} />
      </div>
    </Router>
  );
}

export default AppRouter;
