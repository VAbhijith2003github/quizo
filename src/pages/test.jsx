import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MainPanel from "../components/mainpanel";
import Sidepanel from "../components/sidepanel";
import { PieChart } from '@mui/x-charts/PieChart';
import { initialQuestions, answerKey } from "../paper";
import "./test.css";
import $ from "jquery";

function Test() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [timeLeft, setTimeLeft] = useState(3*60* 60);
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState({
    score: 0,
    total: questions.length,
    correct: 0,
    incorrect: 0,
    unattempted: questions.length,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      handlesubmit();
      return;
    }
    if(timeLeft < 10 * 60) 
    {
      $(".timer").css("color", "red");
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handlesubmit = () => {
    const userAnswers = questions.map((question) => question.chosenOption);
    const correctAnswers = answerKey;

    const newScore = userAnswers.reduce((acc, answer, index) => {
      return answer === correctAnswers[index] ? acc + 1 : acc;
    }, 0);

    const newResult = {
      score: newScore,
      total: questions.length,
      correct: userAnswers.filter(
        (answer, index) => answer === correctAnswers[index]
      ).length,
      incorrect: userAnswers.filter(
        (answer, index) => answer !== correctAnswers[index] && answer !== null
      ).length,
      unattempted: userAnswers.filter((answer) => answer === null).length,
    };
    setResult(newResult);
    setSubmitted(true);
  };

  const resultDisplay = (
    <div className="result">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ color: "black" }}>
        <h2>Results</h2>
        <p>
          Scored{"  "}: {result.score} / {result.total}
        </p>
        <p>Correct answers{"  "}: {result.correct}</p>
        <p>Incorrect answers{"  "}: {result.incorrect}</p>
        <p>Unattempted questions{"  "}: {result.unattempted}</p>
      </div>
       <PieChart
      series={[
        {
          data: [
            { id: 0, value: result.correct, label: 'Correct', color: 'rgba(77, 190, 54, 0.8)' },
            { id: 1, value: result.incorrect, label: 'Incorrect', color: 'rgba(232, 24, 24, 0.8)' },
            { id: 2, value: result.unattempted, label: 'Unattempted', color: 'rgba(255, 165, 0, 0.8)' },
          ],
        },
      ]}
      width={300}
      height={300}
    />
      </div>
      {questions.map((question, index) => (
        <div className="question" key={question.qno}>
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
                    readOnly
                  />
                  {option.key}: {option.value}
                </label>
              </div>
            ))}
            <br />
            <div>
              {<span>Answer : {answerKey[question.qno - 1]}</span>}{" "}
              {question.chosenOption === null
                ? "Not attempted"
                : question.chosenOption === answerKey[question.qno - 1]
                ? "Correct"
                : "Incorrect"}
            </div>
          </form>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      {submitted ? (
        resultDisplay
      ) : (
        <div>
          <div className="timer">
            Time left : {" "}
            {`${Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, "0")}:${(timeLeft % 60)
              .toString()
              .padStart(2, "0")}`}
          </div>
          <MainPanel
            questions={questions}
            setQuestions={setQuestions}
            current={current}
            setCurrent={setCurrent}
            handlesubmit={handlesubmit}
          />
          <Sidepanel
            questions={questions}
            setQuestions={setQuestions}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
      )}
    </>
  );
}

export default Test;
