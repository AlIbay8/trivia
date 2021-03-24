import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question.jsx";
import Nextquestion from "./Nextquestion.jsx";

function App() {
  // usestate here
  let [isAnswered, setIsAnswered] = useState("unanswered");
  let [questionNumber, setQuestionNumber] = useState(0);
  // state variable for user choice here
  let [answerChoice, setAnswerChoice] = useState("unanswered");
  var correctAnswer = data[questionNumber].question.choices[data[questionNumber].question.correct_choice_index];
  var result = "unanswered";

  if (answerChoice !== "unanswered") {
    if (answerChoice === data[questionNumber].question.choices[data[questionNumber].question.correct_choice_index]) {
      result = `Correct, the answer was ${correctAnswer}.`;
    } else {
      result = `Wrong, you chose ${answerChoice}. The correct answer was ${correctAnswer}.`;
    }
  } else {
    result = "";
  }

  return (
    <div className="app">
      <h1>Trivia!</h1>
      <p>Click the correct answer below...</p>
      <Question
        question={data[questionNumber].question.text}
        answers={data[questionNumber].question.choices}
        //handleClick={() => newAnswerChoice()}
        setState={(choice) => {setAnswerChoice(choice)}}
      />
      <br></br>

      {/*
      <button
        onClick={() =>
          setIsAnswered(
            data[questionNumber].question.choices[
              data[questionNumber].question.correct_choice_index
            ]
          )
        }
      >
        Click for the correct answer
      </button>
      <div>The correct answer is {isAnswered}</div>
      */}

      <div>{result}</div>
      <br></br>
      <Nextquestion handleClick={() => nextQuestion()} />
    </div>
  );

  function nextQuestion() {
    if (questionNumber < data.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
    }
    setIsAnswered("unanswered");
    setAnswerChoice("unanswered");
  }

  // new function for when user clicks on a choice here
}

export default App;
