import React from "react";

class InputHP extends React.Component {
  render() {
    return (
      <div className="info-group">
        <label id="currentHpL1">Current HP</label>
        <input
          className="current-hp calc-trigger"
          id="currentHpL1"
          value="341"
        />
        /<span className="max-hp">341</span> (
        <input className="percent-hp calc-trigger" value="100" />
        %)
        <br />
        <br />
        Health <div className="hpbar"></div>
      </div>
    );
  }
}

export default InputHP;
