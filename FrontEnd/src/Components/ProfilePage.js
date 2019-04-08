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
    // FETCH HERE
    this.setState({
      chartData: {
        labels: [
          "clothing",
          "furniture",
          "tools",
          "electronics",
          "toys",
          "misc"
        ],
        datasets: [
          {
            label: "items",
            data: [50, 5, 12, 6, 22, 13],
            backgroundColor: "rgb(0, 63, 158)"
          }
        ]
      }
    });
  }

  componentDidMount() {
    fetch(`https://localhost:44387/api/post`)
      .then(res => res.json())
      .then(json => this.setState({ posts: json }));
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
