import React, { Component } from "react";
import CategoryIndex from "./Components/CategoryIndex";
import CatDetailsPage from "./Components/CatDetailsPage";
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
