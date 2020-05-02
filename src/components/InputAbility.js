import React from 'react';
import { genAbilityOptions } from '../utils';
import { observer } from 'mobx-react';

@observer
class InputAbility extends React.Component {
  onAbilityChange(event) {
    this.props.pokeState.ability = event.target.value;
  }

  onAbilityToggle() {
    this.props.pokeState.abilityOn = !this.props.pokeState.abilityOn;
  }

  render() {
    return (
      <div>
        <label>Ability</label>
        <input
          type="text"
          list="abilityOptions"
          placeholder="(No Ability)"
          value={this.props.pokeState.ability}
          onChange={event => {
            this.onAbilityChange(event);
          }}
        />
        <datalist id="abilityOptions">{genAbilityOptions()}</datalist>
        <button
          title="Is this ability active?"
          type="button"
          onClick={() => {
            this.onAbilityToggle();
          }}>
          Active
        </button>
      </div>
    );
  }
}

export default InputAbility;

// OPTIONAL limit visible abilities to species/forme
