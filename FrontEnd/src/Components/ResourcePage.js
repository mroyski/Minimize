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
        <div className="DonateLinks">
      <a href="https://www.goodwill.org/donate-and-shop/donate-stuff">Goodwill</a>
      <a href="https://satruck.org/">Salvation Army</a>
      <a href="https://vva.org/donate/">Vietnam Veterans of America</a>
      <a href="https://roomtogrow.org/index.php/get-involved#donate-baby-items">Room to Grow</a>
      <a href="https://soles4souls.org/get-involved/give-shoes/">Soles 4 Souls</a>
      <a href="http://donationtown.org/donation-pick-up.html">Donation Town</a>
      <a href="https://www.thearc.org/get-involved/ways-to-give/donate-physical-items">The ARC</a>
      <a href="https://www.savers.com/donate">Savers</a>
      <a href="http://indigorescue.org/?page_id=18">Indigo rescue</a>
      <a href="https://new-eyes.org/join-the-vision">New Eyes</a>
      <a href="https://www.burlington.com/warm-coats-warm-hearts-drive.aspx?utm=marketing&_sp=1700a376-0750-4ee3-99d9-43b19620af17.1554691319024">Burlington</a>
      <a href="https://www.habitat.org/support/donate-items">Habitat for Humanity</a>
      <a href="https://www.toysfortots.org/request_toys/donate-toy.aspx">Toys For Tots</a>
      <a href="https://ncadv.org/donate-a-phone">NCADV</a>
      <a href="https://givebackbox.com/works">Give Back Box</a>
      <a href="https://wish.org/ways-to-help/giving/in-kind">Make A Wish</a>
     
      </div>
      </div>
     
    );
  }
}

export default ResourcePage;
