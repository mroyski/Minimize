import React, { Component } from "react";
import GoogleMaps, { MapContainer } from "./MapContainer";
import "./ResourcePage.css";

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
        <div className="helpContainer">
          <div className="HelpfulLinks" />
          <div className="theminimalists">
            <a
              href="https://www.theminimalists.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              theminimalists.com
            </a>
            <div className="video">
              <iframe
                title="minimalist PodCast"
                src="https://www.youtube.com/embed/iKhQ75DfD2k"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <p>Blogs, Videos, Minimalist Help</p>
          </div>
          <div className="Simplify">
            <a
              href="https://simplifyandpursue.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              simplifyandpursue.com
              <p>
                <img src="./images/SimpleAndPure.png" alt="SimplePureLogo" />
              </p>
            </a>
            <p>Help getting Family and Home Involved</p>
          </div>
          <div className="Uncluttered">
            <a
              href="http://www.becomingminimalist.com/"
              target="-blank"
              rel="noopener noreferrer"
            >
              becomingminimalist.com
              <p>
                <img src="./images/uncluttered.png" alt="UnclutteredLogo" />
              </p>
              <p>Help with Minimalist Beginnings</p>
            </a>
          </div>
        </div>
        <div className="socialContainer">
          <p>Social Media Interests</p>

          <div className="pintrest">
            <a
              href="https://www.pinterest.com/search/pins/?rs=ac&len=2&q=minimalist&eq=minim&etslf=8233&term_meta[]=minimalist%7Cautocomplete%7C2"
              target="-blank"
              rel="noopener noreferrer"
            >
              <img src="./images/Pintrest-Icon.png" alt="PintrestLogo" />
            </a>
          </div>
          <div className="facebook">
            <a
              href="https://www.facebook.com/mnmlstlvng"
              target="-blank"
              rel="noopener noreferrer"
            >
              <img src="./images/facebook-logo.png" alt="FacebookLogo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourcePage;
