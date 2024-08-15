import React, { Component } from "react";
import "./Buttons.css";

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <div className="flex gap-8 justify-center">
          <button className="">Add</button>
          <button className="">Lower</button>
        </div>
      </div>
    );
  }
}
