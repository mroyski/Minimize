import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryIndex from "./Components/CategoryIndexPageContainer";
import CatDetailsPage from "./Components/CategoryDetailsPage";
import ProfilePage from "./Components/ProfilePage";
import ResourcePage from "./Components/ResourcePage";
import GoalsPageContainer from "./Components/GoalsPageContainer";
import NavBar from "./Components/NavBar/NavBar";
import SideNav from "./Components/Hamburger/SideNav";
import BadgeIndexPageContainer from "./Components/BadgeIndexPageContainer";
import "./App.css";

class AppRouter extends Component {
  state = {
    sideNavOpen: false
  };

  hamburgerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideNavOpen: !prevState.sideNavOpen };
    });
  };

  render() {
    let sideNav;
    if (this.state.sideNavOpen) {
      sideNav = <SideNav />;
    }
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <NavBar hamburgerClickHandler={this.hamburgerToggleClickHandler} />
          {sideNav}
        </div>

        <div>
          <Route path="/" exact component={CategoryIndex} />
          <Route path="/category/:categoryId" component={CatDetailsPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/goals" component={GoalsPageContainer} />
          <Route path="/resourcepage" component={ResourcePage} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
