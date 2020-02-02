import React from "react";

class InputLevel extends React.Component {
  render() {
    return (
      <div>
        <label id="levelL1">Level</label>
        <input className="level calc-trigger" id="levelL1" value="100" />
      </div>
    );
  }
}

export default InputLevel;
