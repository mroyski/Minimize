import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryIndex from "./Components/CategoryIndexPageContainer";
import CatDetailsPage from "./Components/CategoryDetailsPage";
import ProfilePage from "./Components/ProfilePage";
import ResourcePage from "./Components/ResourcePage";
import BadgeFunctions from "./Components/BadgeFunctions";
import "./App.css";

function AppRouter() {
  return (
    <Router>
      <nav id="navbar">
        <Link to={`/`}>
          <img src="/Images/Logo3.png" alt="logo" />
        </Link>
        <div className="nav-links">
          <Link to={`/`} className="link">
            GOALS
          </Link>
          <Link to={`/`} className="link">
            HISTORY
          </Link>
          <Link to={`/Badge`} className="link">
            BADGES
          </Link>
          <Link to={"/profile"} className="link">
            PROFILE
          </Link>
          <Link to={"/ResourcePage"} className="link">
            RESOURCES
          </Link>
        </div>
      </nav>
      <div>
        <Route path="/" exact component={CategoryIndex} />
        <Route path="/category/:categoryId" component={CatDetailsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/Badge" component={BadgeFunctions} />
        <Route path="/resourcepage" component={ResourcePage} />
      </div>
    </Router>
  );
}

export default AppRouter;
