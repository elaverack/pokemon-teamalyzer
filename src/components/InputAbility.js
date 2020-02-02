import React from "react";

class InputAbility extends React.Component {
  render() {
    return (
      <div className="gen-specific g3 g4 g5 g6 g7 g8">
        <label id="abilityL1">Ability</label>
        <select
          className="ability terrain-trigger calc-trigger"
          id="abilityL1"
        ></select>
        <input
          type="checkbox"
          title="Is this ability active?"
          className="abilityToggle calc-trigger"
        />
      </div>
    );
  }
}

export default InputAbility;
