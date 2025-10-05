import React, { useState } from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";
import sidebarImg from "../assets/next.png";

const categories = ["Available Tests"];
const links = ["/tests?category=available", "/tests?category=previous"];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <div className={`sidebar-container${collapsed ? " collapsed" : ""}`}>
        <div className="sidebar-content">
          <h2 className="sidebar-title">Categories</h2>
          <ul className="sidebar-list">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={links[categories.indexOf(cat)]}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className="sidebar-item">{cat}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button
          className={`sidebar-toggle${collapsed ? " translated" : ""}`}
          onClick={() => setCollapsed((c) => !c)}
        >
          <img
            src={sidebarImg}
            alt="Toggle Sidebar"
            style={{ width: "40px", height: "40px", transition: "transform 0.75s", transform: collapsed ? "rotate(180deg)" : "none" }}
          />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
