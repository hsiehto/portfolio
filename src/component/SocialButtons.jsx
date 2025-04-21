import React from "react";
import "../component/SocialButtons.css";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="social-buttons-container">
      <a
        className="social-button"
        href="https://github.com/hsiehto"
        aria-label="Github"
        title="Github"
        rel="noopener noreferrer"
        target="_blank"
      >
        <VscGithubInverted className="github-icon" />
        <span className="git-hub-text">Github</span>
      </a>
      <a
        className="social-button"
        href="https://www.linkedin.com/in/hsiehtom/"
        aria-label="Linkedin"
        title="Linkedin"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="linkedin-icon" />
        <span className="linkedin-text">Linkedin</span>
      </a>
    </div>
  );
}
