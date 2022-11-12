import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className="topnav">
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>

        <li>
          <NavLink to="/about"> About me </NavLink>
        </li>

        <li>
          <NavLink to="/projects"> Projects </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>

      </ul>
    </>
  );
};

export default NavBar;
