import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div id="social-media">
      <button>
        <FontAwesomeIcon icon={faFacebookF} />
      </button>
      <button>
        <FontAwesomeIcon icon={faTwitter} />
      </button>
      <button>
        <FontAwesomeIcon icon={faInstagram} />
      </button>
    </div>
  );
}

export default SocialMedia;
