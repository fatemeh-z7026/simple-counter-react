import React, { Component } from "react";
import Buttons from "../Buttons/Buttons";
import "./Counter.css";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
    console.log("+");
  }
  decrease() {
    this.setState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
    console.log("+");
  }
  render() {
    return (
      <div className="count-container">
        <h1 className="text-center font-bold ">Counter</h1>
        <h2 className="text-center">{this.state.counter}</h2>
        <Buttons increase={this.increase} decrease={this.decrease}></Buttons>
      </div>
    );
  }
}
