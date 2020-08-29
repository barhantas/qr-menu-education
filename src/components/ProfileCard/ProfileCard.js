import React from "react";

import ProfileImage from "../ProfileImage";
import ProfileDescription from "../ProfileDescription";

import "./index.css";

function ProfileCard() {
  const profile = {
    name: "Walkers",
    description: "Walkers Description",
  };

  return (
    <div className="profile-card">
      <ProfileImage />
      <ProfileDescription profile={profile} />
    </div>
  );
}

export default ProfileCard;
