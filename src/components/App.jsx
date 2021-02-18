import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return (
    <div>
      {props.question}
      <div className="answers">
        {
          props.answers?.map((answer) => {
            console.log(answer)
            return(
              <Answer choice={answer} />
            );
          })
        }
      </div>
    </div>
  );
}

function Nextquestion(props) {
  return(<button>Next Question</button>);
}

function Answer(props) {
  console.log("Answers: ", props.answers);
  return(
    <div>{props.choice}</div>
  );
}

function App() {
  // usestate here
  let [isAnswered , setIsAnswered] = useState("unanswered");
  
    
  return (
    <div className="app">
      Trivia! 
      <Question question={data[0].question.text} answers={data[0].question.choices} />
      <Answer answers={data[0].question.choices} />
      <Nextquestion />
      <div>The correct answer is {isAnswered}</div>
      <button onClick={() => setIsAnswered(data[0].question.choices[data[0].question.correct_choice_index])}>Answer Question</button>
    </div>
    
  );
}

export default App;
