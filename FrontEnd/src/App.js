import React from "react";
import CategoryIndex from "./Components/CategoryIndexPageContainer";
import CatDetailsPage from "./Components/CategoryDetailsPage";
import ProfilePage from "./Components/ProfilePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function AppRouter() {
  return (
    <Router>
      <nav id="navbar">
        <img src="/Images/Logo.png" alt="logo" />
        <div className="nav-links">
          <Link to={`/`} className="link">
            goals
          </Link>
          <Link to={`/`} className="link">
            history
          </Link>
          <Link to={`/`} className="link">
            badges
          </Link>
        </div>
      </nav>
      <div>
        <Route path="/" exact component={CategoryIndex} />
        <Route path="/category/:categoryId" component={CatDetailsPage} />
        <Route path="/profile" component={ProfilePage} />
      </div>
    </Router>
  );
}

export default AppRouter;
