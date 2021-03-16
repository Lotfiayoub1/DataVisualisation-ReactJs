import React from "react";
import "./Sidebar.css";
import image from "../images/Lotfi.jpeg";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <Avatar className="imgUser" src={image} />
      <ul>
        <li>Chart Bar</li>
        <li>Doughnut & Pie</li>
        <li>Line</li>
      </ul>
    </div>
  );
}

export default Sidebar;
