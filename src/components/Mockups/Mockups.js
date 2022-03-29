import React from "react";
import "./Mockups.css";

function Mockups() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/illustration-mockups.svg"}
        alt="mockups"
        id="mockups"
      />
    </div>
  );
}

export default Mockups;
