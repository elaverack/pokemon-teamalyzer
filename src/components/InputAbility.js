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
        Active?
        <input
          type="checkbox"
          defaultChecked
          title="Is this ability active?"
          className="abilityToggle"
          value={this.props.abilityOn}
          name="abilityOn"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default InputAbility;
