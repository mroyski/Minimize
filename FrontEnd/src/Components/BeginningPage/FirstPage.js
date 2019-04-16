import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./FirstPage.css";
class FirstPage extends Component {
    
    render() {
        return (
            <div id="entirePage">
                <img src="/Images/Logo3.png" alt="logo" />
                <div className="enterSite">
            <Link to={`/categoryIndex`} className="logIn">
              {" "}
              <button>Log In</button>
            </Link>
            <Link to={`/Landing`} className="CreateAccount">
              {" "}
              <button>Create Account</button>
            </Link>
          </div>
            </div>
        );
    }
}

export default FirstPage;