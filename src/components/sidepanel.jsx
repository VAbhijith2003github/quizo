import React from "react";
import "./sidepanel.css";

const Sidepanel = ({ questions, setQuestions, current, setCurrent }) => {
  const questionbubble = (question) => {
    return (
      <div
        className={`question-bubble-${question.statusOfQuestion}`}
        id={question.qno}
        onClick={() => handleonClick(question.qno)}
      >
        <p>{question.qno}</p>
      </div>
    );
  };
  const handleonClick = (qno) => {
    if(qno-1 === current) return;
    const optionselectedornot = questions[current].chosenOption;
    if (!optionselectedornot) {
      setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[current] = {
        ...updatedQuestions[current],
        statusOfQuestion: "unattempted",
      };
      return updatedQuestions;
      });
    }
    setCurrent(qno - 1);
  };
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
            <div
              className="question-bubble-status"
              id="marked-for-review"
            ></div>
            <h3 className="status-bar-text">
              MARKED <br />
              FOR REVIEW
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              className="question-bubble-status"
              id="answered-and-marked-for-review"
            ></div>
            <h3 className="status-bar-text">
              ANSWERED <br />
              AND MARKED <br />
              FOR REVIEW
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
