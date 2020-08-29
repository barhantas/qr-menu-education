import React from "react";

import ProfileImage from "../ProfileImage";
import ProfileDescription from "../ProfileDescription";

import "./index.css";

function ProfileCard() {
  return (
    <div className="profile-card">
      ProfileCard
      <ProfileImage />
      <ProfileDescription />
    </div>
  );
}

export default ProfileCard;
