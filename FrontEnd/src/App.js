import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CategoryIndex from './Components/CategoryIndexPageContainer';
import CatDetailsPage from './Components/CategoryDetailsPage';
import ProfilePage from './Components/ProfilePage';
import ResourcePage from './Components/ResourcePage';
import GoalsPageContainer from './Components/GoalsPageContainer';
import NavBar from './Components/NavBar/NavBar';
import SideNav from './Components/Hamburger/SideNav';
import BadgeIndexPageContainer from './Components/BadgeIndexPageContainer';
import Backdrop from './Components/Backdrop/Backdrop';
import './App.css';

class AppRouter extends Component {
  state = {
    sideNavOpen: false
  };

  hamburgerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideNavOpen: !prevState.sideNavOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({sideNavOpen: false});
  }

  render() {
    let backdrop;
    if (this.state.sideNavOpen) {
      backdrop = <Backdrop click={this.hamburgerToggleClickHandler}/>;
    }
    return (
      <Router>
        <div style={{ height: '100%' }}>
          <NavBar hamburgerClickHandler={this.hamburgerToggleClickHandler} />
          <SideNav show={this.state.sideNavOpen}/>
          {backdrop}
        </div>
        <div>
          <Route path="/" exact component={CategoryIndex} />
          <Route path="/category/:categoryId" component={CatDetailsPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/goals" component={GoalsPageContainer} />
          <Route path="/badges" component={BadgeIndexPageContainer} />
          <Route path="/resourcepage" component={ResourcePage} />
        </div>
      </Router>
      
    );
  }
}

export default AppRouter;
