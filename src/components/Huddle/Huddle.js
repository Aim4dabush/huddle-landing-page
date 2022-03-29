import React from "react";
import "./Huddle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function Huddle() {
  return (
    <div>
      <div id="inline">
        <FontAwesomeIcon
          icon={faCommentDots}
          id="dots"
          className="huddle-row"
        ></FontAwesomeIcon>
        <h1 className="huddle-row">
          <span>Huddle</span>
        </h1>
      </div>
    </div>
  );
}

export default Huddle;
