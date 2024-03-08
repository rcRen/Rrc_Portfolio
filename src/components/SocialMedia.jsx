import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
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
      <a href="www.linkedin.com/in/ruchengren">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
