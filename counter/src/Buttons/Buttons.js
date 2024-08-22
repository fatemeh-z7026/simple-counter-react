import "./Buttons.css";

import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <div>
        <div className="flex gap-8 justify-center">
          <button className="" onClick={props.increase}>
            Add
          </button>
          <button className="" onClick={props.decrease}>
            Lower
          </button>
        </div>
      </div>
    </div>
  );
}
