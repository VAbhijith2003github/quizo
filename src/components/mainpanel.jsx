import React, { useEffect, useState } from "react";
import "./mainpanel.css";

const MainPanel = ({ questions, setQuestions }) => {
  const [current, setCurrent] = useState(0);

  const handleRev = () => {
    const optionselectedornot = questions[current].chosenOption;
    if(optionselectedornot){
      const updatedQuestions = questions.map((q, idx) =>
        idx === current
          ? { ...q, statusOfQuestion: "answered-and-marked-for-review" }
          : q
      );
    setQuestions(updatedQuestions);
  } else {
    const updatedQuestions = questions.map((q, idx) =>
      idx === current
        ? { ...q, statusOfQuestion: "marked-for-review" }
        : q
      );
    setQuestions(updatedQuestions);
  }
  };

  const handleOptionChange = (e) => {
    const chosen = e.target.value;
    const currentoption = questions[current].chosenOption;
    if (currentoption === chosen) {
      const updatedQuestions = questions.map((q, idx) =>
        idx === current
          ? { ...q, chosenOption: null, statusOfQuestion: "unattempted" }
          : q
      );
      setQuestions(updatedQuestions);
      return;
    }
    const updatedQuestions = questions.map((q, idx) =>
      idx === current
        ? { ...q, chosenOption: e.target.value, statusOfQuestion: "attempted" }
        : q
    );
    setQuestions(updatedQuestions);
  };

  const handleNext = () => {
    const updatedQuestions = questions.map((q, idx) =>
      idx === current && q.statusOfQuestion === "unopened"
        ? { ...q, statusOfQuestion: "unattempted" }
        : q
    );
    setQuestions(updatedQuestions);
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    const updatedQuestions = questions.map((q, idx) =>
      idx === current && q.statusOfQuestion === "unopened"
        ? { ...q, statusOfQuestion: "unattempted" }
        : q
    );
    setQuestions(updatedQuestions);
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = () => {
    const updatedQuestions = questions.map((q, idx) =>
      idx === current ? { ...q, statusOfQuestion: "attempted" } : q
    );
    handleNext();
    setQuestions(updatedQuestions);
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
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={current === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MainPanel;
