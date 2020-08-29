import React from "react";

import "./index.css";

function ProfileDescription({ profile }) {
  return (
    <div className="profile-description">
      <p>{profile.name}</p>
      <p>{profile.description}</p>
    </div>
  );
}

export default ProfileDescription;
