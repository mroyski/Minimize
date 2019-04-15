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
                <p>
                  The categories page breaks down your minimalist journey into
                  specific pieces to give you a more clear path. Select a
                  category for more information and to post your actions.
                </p>
              </div>
            </div>
            <div id="posts">
              <h3>Posts</h3>
              <p id="postsDescription">
                After you select a category you have to option to create a post.
                Posts are a record of your actions and give you a detailed
                account on the items you discard.
              </p>
              <div id="postsImg">
                <img src="./images/PostLanding.png" alt="category" />
              </div>
              <div id="postsText">
                <p>
                  <span class="boldText">Create Post</span> - Click this button
                  to create a new post.
                </p>
                <p>
                  <span class="boldText">Time</span> - This is a timestamp of
                  your post
                </p>
                <p>
                  <span class="boldText">Removed Items</span> - This number
                  represents the amount of items you discard.
                </p>
                <p>
                  <span class="boldText">Description</span> - You can add
                  further detail by entering more information about this post.
                </p>
                <p>
                  <span class="boldText">Delete</span> - Delete this post.
                </p>
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
