import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/rcRen">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/ruchengren">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
