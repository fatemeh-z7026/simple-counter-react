import React, { Component } from "react";
import Buttons from "../Buttons/Buttons";
import "./Counter.css";

export default class Counter extends Component {
  render() {
    return (
      <div className="count-container">
        <h1 className="text-center font-bold ">Counter</h1>
        <h2 className="text-center">0</h2>
        <Buttons></Buttons>
      </div>
    );
  }
}
