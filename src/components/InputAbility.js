import React from "react";
import { genAbilityOptions } from "../utils";

// STRETCH limit visible abilities to species/forme

class InputAbility extends React.Component {
  render() {
    return (
      <div>
        <label>Ability</label>
        <input
          name="ability"
          type="text"
          className="abilitySelector"
          list="abilityOptions"
          placeholder="(No Ability)"
          value={this.props.ability}
          onChange={this.props.handleChange}
        />
        <datalist id="abilityOptions">{genAbilityOptions()}</datalist>
        {/* TODO conditional button styling to indicate state */}
        <button
          name="abilityOn"
          className="abilityToggle"
          title="Is this ability active?"
          type="button"
          onClick={this.props.handleChange}
        >
          Active?
        </button>
      </div>
    );
  }
}

export default InputAbility;
