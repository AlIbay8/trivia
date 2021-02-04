import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (<div>{props.question}</div>);
}

function Nextquestion(props) {
  return(<button>Next Question</button>);
}

function Answer(props) {
  return(
    <div>
      <div>{props.answerOne}</div> 
      <div>{props.answerTwo}</div>
      <div>{props.answerThree}</div>
      <div>{props.answerFour}</div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      Trivia! 
      <Question question={data[0].question.text} />
      <Answer answerOne={data[0].question.choices[0]} answerTwo={data[0].question.choices[1]} answerThree={data[0].question.choices[2]} answerFour={data[0].question.choices[3]}/>
      <Nextquestion />
    </div>
  );
}

export default App;
