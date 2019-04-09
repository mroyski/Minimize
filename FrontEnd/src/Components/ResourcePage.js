import React, { Component } from "react";
import GoogleMaps, { MapContainer } from "./MapContainer";

class ResourcePage extends Component {
  render() {
    return (
      <div id="Map">
        <GoogleMaps />
      </div>
    );
  }
}

export default ResourcePage;
