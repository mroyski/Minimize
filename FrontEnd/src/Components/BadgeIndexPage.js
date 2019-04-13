import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
library.add(faMedal);

export default props => {
  const listOfBadges = props.badges.map(item => (
    <div className="badge-container">
      <FontAwesomeIcon icon="medal" className="badge-index-icon" />
      <div className="badge-index-info">
        <h5>{item.badgeName}</h5>
        <p>{item.badgeDescription}</p>
      </div>
    </div>
  ));
  return <div className="badge-index">{listOfBadges}</div>;
};
