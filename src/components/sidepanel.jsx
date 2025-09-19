import React from "react";
import "./sidepanel.css";

const Sidepanel = ({ questions }) => {
  return (
    <div className="sidepanel">
      <div className="question-container">
        <ul className="question-list">
          {questions.map((question) => (
            <li key={question.qno}>{questionbubble(question)}</li>
          ))}
        </ul>
      </div>
      <div className="status">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="question-bubble-status" id="unattempted"></div>
            <h3 className="status-bar-text">UNATTEMPTED</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="question-bubble-status" id="attempted"></div>
            <h3 className="status-bar-text">ATTEMPTED</h3>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="question-bubble-status" id="marked-for-review"></div>
            <h3 className="status-bar-text">MARKED <br />FOR REVIEW</h3>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="question-bubble-status" id="answered-and-marked-for-review"></div>
            <h3 className="status-bar-text">ANSWERED <br />AND MARKED <br />FOR REVIEW</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const questionbubble = (question) => {
  return (
    <div className={`question-bubble-${question.statusOfQuestion}`} id={question.qno}>
      <p>{question.qno}</p>
    </div>
  );
};

export default Sidepanel;
