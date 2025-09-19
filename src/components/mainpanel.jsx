import React, { useEffect, useState } from "react";
import "./mainpanel.css";

const MainPanel = ({ questions, setQuestions }) => {
  const [current, setCurrent] = useState(0);

  const handleOptionChange = (e) => {
    const updatedQuestions = questions.map((q, idx) =>
      idx === current
        ? { ...q, chosenOption: e.target.value, statusOfQuestion: "attempted" }
        : q
    );
    setQuestions(updatedQuestions);
  };

  const handleNext = () => {
     const updatedQuestions = questions.map((q, idx) =>
        idx === current && q.statusOfQuestion === "unopened" ? { ...q, statusOfQuestion: "unattempted" }
        : q
    );
    setQuestions(updatedQuestions);
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = () => {
    const updatedQuestions = questions.map((q, idx) =>
      idx === current
        ? { ...q, statusOfQuestion: "attempted" }
        : q
    );
    handleNext();
    setQuestions(updatedQuestions);
  };

  return (
    <div className="mainpanel">
      {questions.map((question, index) =>
        index === current && (
          <div key={question.qno}>
            <h2>Question {question.qno}</h2>
            <p>{question.question}</p>
            <form>
              {question.options.map((option) => (
                <div key={option.key}>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={option.key}
                      checked={question.chosenOption === option.key}
                      onChange={handleOptionChange}
                    />
                    {option.key}: {option.value}
                  </label>
                </div>
              ))}
            </form>
          </div>
        )
      )}
      <div className="navigation-buttons">
        <button type="button" onClick={handlePrev} disabled={current === 0}>Prev</button>
        <button type="button" onClick={handleSubmit}>Submit</button>
        <button type="button" onClick={handleNext} disabled={current === questions.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default MainPanel;
