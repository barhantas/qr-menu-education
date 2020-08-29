import React from "react";

import sampleProductImage from "../../assets/sample-product-image.jpeg";

import "./index.css";

function MenuItem({ menuItem }) {
  return (
    <div className="menu-item">
      <img src={sampleProductImage} alt="profile image" />
      Price: {menuItem.price} $
    </div>
  );
}

export default MenuItem;
