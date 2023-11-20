import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Content.scss";

const Content = () => {
  let active = {
    color: "#212529",
    borderBottom: "3px solid #212529",
  };
  return (
    <div className="content">
      <div className="content-name">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          Today
        </NavLink>
        <NavLink
          to="/week"
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          Week
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Content;
