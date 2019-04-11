import React, { Component } from "react";
import Post from "./Post";
import Chart from "./Chart";
import "./ProfilePage.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
library.add(faMedal);

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    const labels = [];
    const removedItems = [];
    fetch(`https://localhost:44387/api/category`)
      .then(res => res.json())
      .then(data => {
        const categoryArray = Object.assign([], data); //
        categoryArray.forEach(element => {
          labels.push(element.categoryName);
        });
        data.map(item => {
          const convertposts = Object.assign([], item.posts);
          convertposts.map(post => removedItems.push(post.removedItems));
        });
      });

    this.setState({
      chartData: {
        labels: labels,
        datasets: [
          {
            label: "items",
            data: removedItems,
            backgroundColor: [
              "rgb(0, 63, 158)",
              "rgb(111, 0, 159)",
              "rgb(214, 0, 65)",
              "rgb(229, 238, 0)",
              "rgb(240, 151, 0)",
              "rgb(97, 213, 0)"
            ]
          }
        ]
      }
    });
  }

  render() {
    const listOfPosts = this.state.posts.map(post => (
      <Post key={post.postId} post={post} />
    ));

    return (
      <div id="ProfileBody">
        <div className="ProgressSection">
          <h2>Progress</h2>
          <Chart chartData={this.state.chartData} />
        </div>
        <div className="BadgesSection">
          <h2>Badges</h2>
          <div className="BadgesList">
            <div className="FirstBadge">
              <p>Welcome!</p>
              <p>
                <FontAwesomeIcon icon="medal" id="FABadge" />
              </p>
              <p>You successfully joined minimize</p>
            </div>
            <div className="SecondBadge">
              <p>First Timer</p>
              <p>
                <FontAwesomeIcon icon="medal" id="FABadge" />
              </p>
              <p>You made your first post</p>
            </div>
          </div>
        </div>
        <div className="PostSection">
          <h2>Posts</h2>
        </div>
        <ul id="PostList">{listOfPosts}</ul>
      </div>
    );
  }
}

export default ProfilePage;
