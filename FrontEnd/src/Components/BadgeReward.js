import React, { Component } from "react";
import { GetAllBadges } from "./Library/HelperFunctions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
library.add(faMedal);

class BadgeReward extends Component {
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
    const {
      itemsCount,
      clothingCount,
      furnitureCount,
      electronicsCount,
      toolsCount,
      toysCount,
      miscCount
    } = this.props;
    const reward = this.state.badges.map(item => {
      if (clothingCount >= 1 && item.badgeId == 3) {
        return (
          <div>
            <h5>{item.badgeName}</h5>
            <FontAwesomeIcon icon="medal" />
            <p>{item.badgeDescription}</p>
          </div>
        );
      } else {
        console.log("nope");
      }
    });
    return <div>{reward}</div>;
  }
}

export default BadgeReward;
