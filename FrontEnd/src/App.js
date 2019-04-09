import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryIndex from "./Components/CategoryIndexPageContainer";
import CatDetailsPage from "./Components/CategoryDetailsPage";
import ProfilePage from "./Components/ProfilePage";
import "./App.css";

function AppRouter() {
  return (
    <Router>
      <nav id="navbar">
        <img src="/Images/Logo2.png" alt="logo" />
        <div className="nav-links">
          <Link to={`/`} className="link">
            GOALS
          </Link>
          <Link to={`/`} className="link">
            HISTORY
          </Link>
          <Link to={`/`} className="link">
            BADGES
          </Link>
          <Link to={"/profile"} className="link">
            profile
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
