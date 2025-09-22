import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MainPanel from "../components/mainpanel";
import Sidepanel from "../components/sidepanel";
import { PieChart } from "@mui/x-charts/PieChart";
import test from "../paper";
import "./test.css";
import $ from "jquery";

function Test() {
  const [started, setStarted] = useState(false);
  const answerKey = test.answerKey;
  test.time_stamp = new Date().toLocaleString();
  const [questions, setQuestions] = useState(test.questions);
  const [timeLeft, setTimeLeft] = useState(test.time_duration);
  const [result, setResult] = useState(test.result);
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const starting_page = () => (
    <div className="start-page">
      <h1>Welcome to the Test</h1>
      <h2>Assessment Details</h2>
      <ul>
        <li>
          <strong>Exam Name:</strong> {test.name}
        </li>
        <li>
          <strong>Duration:</strong> {Math.floor(test.time_duration / 60)}{" "}
          minutes
        </li>
        <li>
          <strong>Total Questions:</strong> {test.questions.length}
        </li>
        <li>
          <strong>Maximum Marks:</strong> {test.questions.length}
        </li>
        <li>
          <strong>Marking Scheme:</strong> +1 for correct, 0 for
          incorrect/unattempted
        </li>
      </ul>
      <h2>Assessment Instructions</h2>
      <ol>
        <li>Each question has four options, only one is correct.</li>
        <li>
          Click on an option to select your answer. Click again to unselect.
        </li>
        <li>
          You can navigate between questions using the "Prev" and "Next"
          buttons.
        </li>
        <li>Use "Mark for review" to flag questions for later review.</li>
        <li>Unattempted questions will not fetch any marks.</li>
        <li>
          Once you click "Submit", your answers will be locked and evaluated.
        </li>
        <li>Do not refresh or close the browser tab during the test.</li>
        <li>
          Time left is shown at the top. The test will auto-submit when time
          runs out.
        </li>
        <li>
          Text selection and clipboard actions are disabled during the test.
        </li>
      </ol>
      <button onClick={() => setStarted(true)}>Start Test</button>
    </div>
  );

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

  useEffect(() => {
    if (!started || submitted) return;

    if (timeLeft === 0) {
      handlesubmit();
      return;
    }
    if (timeLeft < 10 * 60) {
      $(".timer").css("color", "red");
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [started, handlesubmit]);

  const resultDisplay = (
    <div className="result">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ color: "black" }}>
          <h2>Results</h2>
          <p>
            Scored{"  "}: {result.score} / {result.total}
          </p>
          <p>
            Correct answers{"  "}: {result.correct}
          </p>
          <p>
            Incorrect answers{"  "}: {result.incorrect}
          </p>
          <p>
            Unattempted questions{"  "}: {result.unattempted}
          </p>
        </div>
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: result.correct,
                  label: "Correct",
                  color: "rgba(77, 190, 54, 0.8)",
                },
                {
                  id: 1,
                  value: result.incorrect,
                  label: "Incorrect",
                  color: "rgba(232, 24, 24, 0.8)",
                },
                {
                  id: 2,
                  value: result.unattempted,
                  label: "Unattempted",
                  color: "rgba(255, 165, 0, 0.8)",
                },
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

  const testpage = () => {
    return (
      <div>
        <div>
          <div className="timer">
            Time left :{" "}
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
      </div>
    );
  };

  return (
    <>
      <Navbar />
      {started === false
        ? starting_page()
        : submitted
        ? resultDisplay
        : testpage()}
    </>
  );
}

export default Test;
