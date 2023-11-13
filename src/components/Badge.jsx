import React from "react";
import badges from "../data/badges.json";

export const setBadges = (badgeArray) => {
  return badgeArray.map((badgeName) => {
    const badge = badges[badgeName];
    return (
      <a
        key={badgeName}
        href={badge.href}
        target="_blank"
        className={`badge ${badge.className}`}
      >
        {badge.text}
      </a>
    );
  });
};
