import React from "react";

import MenuItem from "../MenuItem";

import "./index.css";

function Menu() {
  const menuItems = [
    {
      imgSrc: "qwe",
      name: "product 1",
      price: 10,
    },
    {
      imgSrc: "qwe",
      name: "product 2",
      price: 11,
    },
    {
      imgSrc: "qwe",
      name: "product 2",
      price: 12,
    },
    {
      imgSrc: "qwe",
      name: "product 2",
      price: 12,
    },
  ];

  return (
    <div className="menu-card">
      {menuItems.map((menuItem) => (
        <MenuItem menuItem={menuItem} />
      ))}
    </div>
  );
}

export default Menu;
