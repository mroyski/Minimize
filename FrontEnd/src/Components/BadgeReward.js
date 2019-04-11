import React, { Component } from "react";
import { GetAllBadges } from "./Library/HelperFunctions";

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
    const {itemsCount,
    clothingCount,
    furnitureCount,
    electronicsCount,
    toolsCount,
    toysCount,
    miscCount } = this.props;
    const reward = this.state.badges.map(item => {
      <div>
        <h5>{item.badgeName}</h5>
        <FontAwesomeIcon icon={item.badgeIcon} />
        <p>{item.badgeDescription}</p>
      </div>;

      if 
    });
    return <div >{reward}</div>;
  }
}

export default BadgeReward;
