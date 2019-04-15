import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div id="landing">
          <div className="info">
            <p>
              <h2>What Is Minimalism?</h2>
              Minimalism is a tool to rid yourself of life’s excess in favor of
              focusing on what’s important—so you can find happiness,
              fulfillment, and freedom.
            </p>
          </div>
          <div className="howItWorks">
            <h2>The Purpose of This App</h2>
            <br /> Assist users in approaching minimalism for the first time by
            making the process easy to manage. Educate users on what minimalism
            is all about, why it is beneficial, and how to start Show users
            their progress throughout their journey and give them a way to set
            goals Give suggestions on what to do with the items they remove from
            their life Keep users updated on the latest trends Inspire people to
            better their life by shedding their possessions rather than
            obtaining new ones
          </div>
          <h2>Getting Started</h2>
          <div className="sections">
            <div id="categories">
              <h3>Categories</h3>
              <div id="categoriesImg">
                <img src="./images/ClothingCategory.png" alt="category" />
              </div>
              <div id="categoriesText">
                The categories page breaks down your minimalist journey into
                specific pieces to give you a more clear path. Select a category
                for more information and to post your actions.
              </div>
            </div>
          </div>
          <div className="enterSite">
            <Link to={`/categoryIndex`} className="link">
              {" "}
              Push Me Hard
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
