import React, { Component } from "react";
import GoogleMaps, { MapContainer } from "./MapContainer";
import ReactPlayer from "react-player";
import "./ResourcePage.css";

class ResourcePage extends Component {
  render() {
    return (
      <div id="Body">
        <div className="Map">
          <h2>Local Places and Links You May Find Helpful</h2>
        </div>
        <div className="HelpfulLinks" />
        <div className="theminimalists">
          <a href="https://www.theminimalist.com">theminimalists.com</a>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/vLxKGb-_2U4"
              width="30%"
              height="30%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcePage;
