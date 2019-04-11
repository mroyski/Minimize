import React, { Component } from "react";
import { GetAllBadges } from "./Library/HelperFunctions";
import BadgeIndexPage from "./BadgeIndexPage";
import BadgeFunctions from "./BadgeFunctions";

class BadgeIndexPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      badges: []
    };
  }

  componentDidMount() {
    GetAllBadges().then(json => this.setState({ badges: json }));
  }

  render() {
    return (
      <div>
        <h1>Badges</h1>
        {/* <BadgeIndexPage badges={this.state.badges} /> */}
        <BadgeFunctions />
      </div>
    );
  }
}

export default BadgeIndexPageContainer;
