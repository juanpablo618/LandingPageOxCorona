import React from "react";

const HeroRobotImage = ({ children, HeroRobotImage }) => {
  return <header className={HeroRobotImage}>{children}</header>;
};

export default HeroRobotImage;

HeroRobotImage.defaultProps = {
  HeroRobotImage: "defaultHeroRobotImage"
};
