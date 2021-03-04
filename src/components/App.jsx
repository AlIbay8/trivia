import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div>
      {props.question}
      <div className="answers">
        {props.answers?.map((answer) => {
          return <Answer choice={answer} handleClick={props.handleClick}/>;
        })}
      </div>
    </div>
  );
}

function Nextquestion(props) {
  return <button onClick={props.handleClick}>Next Question</button>;
}

function Answer(props) {
  return <div onClick={props.handleClick}>{props.choice}</div>;
}


function App() {
  // usestate here
  let [isAnswered, setIsAnswered] = useState("unanswered");
  let [questionNumber, setQuestionNumber] = useState(0);
  // state variable for user choice here
  let [answerChoice, setAnswerChoice] = useState(0);


  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questionNumber].question.text}
        answers={data[questionNumber].question.choices}
        handleClick={() => newAnswerChoice()}
      />
      {/*<Answer answers={data[questionNumber].question.choices} />*/}
      <button
        onClick={() =>
          setIsAnswered(
            data[questionNumber].question.choices[data[questionNumber].question.correct_choice_index]
          )
          
        }
      >
        Answer Question
      </button>
      <div>The correct answer is {isAnswered}</div>
      <Nextquestion handleClick={() => nextQuestion()}/>
    </div>
  );

  function nextQuestion() {
    if (questionNumber < data.length-1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
    }
  }

  // new function for when user clicks on a choice here
  function newAnswerChoice(choice) {
    console.log("clicked", choice);
  }
}

export default App;
