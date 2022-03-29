import React from "react";
import "./Background.css";

function Background() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/bg-desktop.svg"}
        alt="background"
        id="desktop-background"
      ></img>
      <img
        src={process.env.PUBLIC_URL + "/bg-mobile.svg"}
        alt="mobile-background"
        id="mobile-background"
      />
    </div>
  );
}

export default Background;
