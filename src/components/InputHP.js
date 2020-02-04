import React from "react";

// TODO set and read current hp, % hp, and max hp value with state

class InputHP extends React.Component {
  render() {
    return (
      <div>
        <label id="currentHp">Current HP</label>
        <input className="currenthp" id="currentHp" defaultValue="341" />/
        <output className="max-hp">341</output>(
        <input className="percent-hp" defaultValue="100" />
        %)
      </div>
    );
  }
}

export default InputHP;
