import React, { useEffect, useState } from "react";
import "./mainpanel.css";

const MainPanel = ({ questions, setQuestions, current, setCurrent, handlesubmit }) => {
  const handleRev = () => {
    const optionselectedornot = questions[current].chosenOption;
    const updatedQuestions = [...questions];
    if (optionselectedornot) {
      updatedQuestions[current] = {
        ...updatedQuestions[current],
        statusOfQuestion: "answered-and-marked-for-review",
      };
    } else {
      updatedQuestions[current] = {
        ...updatedQuestions[current],
        statusOfQuestion: "marked-for-review",
      };
    }
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e) => {
    const chosen = e.target.value;
    const updatedQuestions = [...questions];
    if (updatedQuestions[current].chosenOption === chosen) {
      updatedQuestions[current] = {
        ...updatedQuestions[current],
        chosenOption: null,
        statusOfQuestion: "unattempted",
      };
      setQuestions(updatedQuestions);
      return;
    }
    updatedQuestions[current] = {
      ...updatedQuestions[current],
      chosenOption: chosen,
      statusOfQuestion: "attempted",
    };
    setQuestions(updatedQuestions);
  };

  const handleNext = () => {
    const updatedQuestions = [...questions];
    if (updatedQuestions[current].statusOfQuestion === "unopened") {
      updatedQuestions[current] = {
        ...updatedQuestions[current],
        statusOfQuestion: "unattempted",
      };
      setQuestions(updatedQuestions);
    } else {
      setQuestions(updatedQuestions);
    }
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    const updatedQuestions = [...questions];
    if (updatedQuestions[current].statusOfQuestion === "unopened") {
      updatedQuestions[current] = {
        ...updatedQuestions[current],
        statusOfQuestion: "unattempted",
      };
      setQuestions(updatedQuestions);
    } else {
      setQuestions(updatedQuestions);
    }
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="mainpanel">
      <div className="question" key={questions[current].qno}>
        <h2>Question {questions[current].qno}</h2>
        <p>{questions[current].question}</p>
        <form>
          {questions[current].options.map((option) => (
            <div key={option.key}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={option.key}
                  checked={questions[current].chosenOption === option.key}
                  onClick={handleOptionChange}
                  onChange={handleOptionChange}
                />
                {option.key}: {option.value}
              </label>
            </div>
          ))}
        </form>
      </div>
      <div className="navigation-buttons">
        <button type="button" onClick={handleRev}>
          Mark for review
        </button>
        <button type="button" onClick={handlePrev} disabled={current === 0}>
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={current === questions.length - 1}
        >
          Next
        </button>
        <button type="button" className="submit-button" onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MainPanel;
