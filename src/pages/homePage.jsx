import React from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="homepage-container">
          <h1 className="homepage-title">Welcome to Quizo!</h1>
          <p className="homepage-desc">
            Quizo is your online platform for taking mock tests and preparing for competitive exams.
          </p>
          <p className="homepage-desc">
            To get started, select a test or subject from the sidebar on the left.
          </p>
          <p className="homepage-highlight">
            Practice, analyze, and improve your scores with Quizo!
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;