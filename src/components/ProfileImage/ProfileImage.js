import React from "react";

import walkersImage from "../../assets/walkers.jpg";
import "./index.css";

function ProfileImage() {
  return (
    <div className="profile-image">
      <img src={walkersImage} alt="profile image" />
    </div>
  );
}

export default ProfileImage;
