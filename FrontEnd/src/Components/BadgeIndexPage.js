import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  const listOfBadges = props.badges.map(item => (
    <div>
      <h5>{item.badgeName}</h5>
      <FontAwesomeIcon icon={item.badgeIcon} />
      <p>{item.badgeDescription}</p>
    </div>
  ));
  return <div>{listOfBadges}</div>;
};
