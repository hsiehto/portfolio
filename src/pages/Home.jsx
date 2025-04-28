import React from "react";
import landingImage from "../../images/landingImage.jpeg";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="left-landing text-style">
          <div>
            i am a full stack engineer passionate about creating inclusive
            applications
          </div>
          <br />
          <div>located in sf bay area</div>
        </div>
        <div className="right-landing">
          <img
            className="landing-image"
            src={landingImage}
            alt="Landing Image"
          />
        </div>
      </div>
    </>
  );
}
