import React from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import { useNavigate } from "react-router-dom";
import test from "../paper";
import "./tests.css";

const mockTests = [test];

const Tests = () => {
  const navigate = useNavigate();

  const handleClick = (qid) => {
    console.log("Navigating to test with qid:", qid);
    navigate(`/test?testid=${qid}`);
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="tests-container">
          <h1 className="tests-title">Available Tests</h1>
          <ul className="tests-list">
            {mockTests.map((test, index) => (
              <li key={test.id || index} className="tests-item">
                <span className="test-name">{test.name}</span>
                <button
                  className="test-action"
                  onClick={() => handleClick(test.qid)}
                >
                  Start Test
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tests;