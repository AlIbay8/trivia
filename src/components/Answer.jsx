import React, { Component, useState } from "react";
function Answer(props) {
  return <div onClick={props.handleClick}>{props.choice}</div>;
}

export default Answer;