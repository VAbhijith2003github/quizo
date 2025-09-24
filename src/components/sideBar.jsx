import React, { useState } from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";

const categories = ["Available Tests"];
const links = ["/tests?category=available", "/tests?category=previous"];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar-container${collapsed ? " collapsed" : ""}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed((c) => !c)}
      >
        {collapsed ? "→" : "←"}
      </button>
      <div className="sidebar-content">
        <h2 className="sidebar-title">Categories</h2>
        <ul className="sidebar-list">
          {categories.map((cat) => (
            <Link key={cat} to={links[categories.indexOf(cat)]} style={{ textDecoration: 'none', color: 'inherit' }}>
              <li className="sidebar-item">
                {cat}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
