import React from "react";
import landingImage from "../../images/landingImage.jpeg";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <div className="leftLanding textStyle">
        <div>
          i am a full stack engineer passionate about creating inclusive
          applications
        </div>
        <br />
        <div>located in sf bay area</div>
      </div>
      <div className="rightLanding">
        <img className="landingImage" src={landingImage} alt="Landing Image" />
      </div>
    </div>
  );
}
