import React, { Component, useState } from "react";
import Answer from './Answer.jsx'

function Question(props) {
  return (
    <div>
      {props.question}
      <div className="answers">
        {props.answers?.map((answer) => {
          return <Answer choice={answer} handleClick={() => {props.setState(answer)}} key={answer}/>;
        })}
      </div>
    </div>
  );
}

export default Question;