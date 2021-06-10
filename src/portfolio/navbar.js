import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <header className="bg-gray-50">
      {/* parent */}
      <div className="nav-container">
        {/* children */}
        <div className="left-item">
          <NavLink
            to="work"
            activeClassName="text-gray-900 underline"
            className="inline-flex items-center py-3 px-0 mr-5 rounder text-xl text-gray-500 font-thin hover:text-yellow-700"
          >
            Works
          </NavLink>
          <NavLink
            to="about"
            activeClassName="text-gray-900 underline"
            className="inline-flex items-center py-3 px-5 mr-4 rounder text-xl text-gray-500 font-thin hover:text-yellow-700"
          >
            About
          </NavLink>
        </div>
        {/* children */}
        <div className="right-item">
          <NavLink
            to="/"
            exact
            activeClassName="text-gray-700"
            className="py-3 px-5 ml-20 text-gray-400 hover:text-yellow-400 text-6xl font-thin tracking-wide"
          >
            Krystian Damian Krawczyk
          </NavLink>
        </div>
      </div>
    </header>
  );
}