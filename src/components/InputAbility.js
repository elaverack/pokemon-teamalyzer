import React from "react";
import { genAbilityOptions } from "../utils";

// STRETCH limit visible abilities to species/forme

class InputAbility extends React.Component {
  render() {
    return (
      <div>
        <label id="ability">Ability</label>
        {/* TODO input value as default ability from state */}
        <input
          type="text"
          className="abilitySelector"
          list="abilityOptions"
          placeholder="(No Ability)"
        />
        <datalist id="abilityOptions">{genAbilityOptions()}</datalist>
        Active?
        <input
          type="checkbox"
          defaultChecked
          title="Is this ability active?"
          className="abilityToggle calc-trigger"
        />
      </div>
    );
  }
}

export default InputAbility;
