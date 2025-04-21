import React from "react";
import "./Footer.css";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <footer className="footer">
      <SocialButtons />
      <p>
        <a href="mailto:hsieh.tom@gmail.com">hsieh.tom@gmail.com</a>
      </p>
      <p>&copy; 2025 Tom Hsieh. All rights reserved.</p>
    </footer>
  );
}
