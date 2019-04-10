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
          
         
      </div>
        <div className="Simplify">
          <a href="https://simplifyandpursue.com">simplifyandpursue.com</a>
        </div>
        <div className="ReasourceLinks">
      <a href="https://www.goodwill.org/donate-and-shop/donate-stuff">Goodwill</a>
      <a href="https://satruck.org/">Salvation Army</a>
      <a href="https://vva.org/donate/">Vietnam Veterans of America</a>
      <a href="https://roomtogrow.org/index.php/get-involved#donate-baby-items">Room to Grow</a>
      <a href="https://soles4souls.org/get-involved/give-shoes/">Soles 4 Souls</a>
      <a href="http://donationtown.org/donation-pick-up.html">Donation Town</a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>

      </div>
      </div>
     
    );
  }
}

export default ResourcePage;
