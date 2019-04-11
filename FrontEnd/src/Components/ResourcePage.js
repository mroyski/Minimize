import React, { Component } from "react";
import GoogleMaps, { MapContainer } from "./MapContainer";
import ReactPlayer from "react-player";
import "./ResourcePage.css";
import CurrentLocation from "./CurrentLocation";

class ResourcePage extends Component {
  render() {
    return (
      <div id="Body">
        <div className="Title">
          <p>Local Places and Links You May Find Helpful</p>
        </div>
        <div className="Map">
          <GoogleMaps />
        </div>
        <div className="Container">
          <div className="HelpfulLinks" />
          <div className="theminimalists">
            <a href="https://www.theminimalists.com/" target="_blank">
              theminimalists.com
            </a>
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/iKhQ75DfD2k"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <p>Blogs, Videos, Minimalist Help</p>
          </div>
          <div className="Simplify">
            <a href="https://simplifyandpursue.com" target="_blank">
              simplifyandpursue.com
              <p>
                <img src="./images/SimpleAndPure.png" />
              </p>
            </a>
            <p>Help getting Family and Home Involved</p>
          </div>
          <div className="Uncluttered">
            <a href="http://www.becomingminimalist.com/" target="_blank">
              becomingminimalist.com
              <p>
                <img src="./images/uncluttered.png" />
              </p>
              <p>Help with Minimalist Beginnings</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcePage;
