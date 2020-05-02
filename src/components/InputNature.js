import React from 'react';
import { observer } from 'mobx-react';

@observer
class InputNature extends React.Component {
  onNatureChange(event) {
    this.props.pokeState.nature = event.target.value;
  }

  render() {
    return (
      <div>
        <label>Nature</label>
        <select
          value={this.props.pokeState.nature}
          onChange={event => {
            this.onNatureChange(event);
          }}>
          <option value="Adamant">Adamant (+Atk, -SpA)</option>
          <option value="Bashful">Bashful</option>
          <option value="Bold">Bold (+Def, -Atk)</option>
          <option value="Brave">Brave (+Atk, -Spe)</option>
          <option value="Calm">Calm (+SpD, -Atk)</option>
          <option value="Careful">Careful (+SpD, -SpA)</option>
          <option value="Docile">Docile</option>
          <option value="Gentle">Gentle (+SpD, -Def)</option>
          <option value="Hardy">Hardy</option>
          <option value="Hasty">Hasty (+Spe, -Def)</option>
          <option value="Impish">Impish (+Def, -SpA)</option>
          <option value="Jolly">Jolly (+Spe, -SpA)</option>
          <option value="Lax">Lax (+Def, -SpD)</option>
          <option value="Lonely">Lonely (+Atk, -Def)</option>
          <option value="Mild">Mild (+SpA, -Def)</option>
          <option value="Modest">Modest (+SpA, -Atk)</option>
          <option value="Naive">Naive (+Spe, -SpD)</option>
          <option value="Naughty">Naughty (+Atk, -SpD)</option>
          <option value="Quiet">Quiet (+SpA, -Spe)</option>
          <option value="Quirky">Quirky</option>
          <option value="Rash">Rash (+SpA, -SpD)</option>
          <option value="Relaxed">Relaxed (+Def, -Spe)</option>
          <option value="Sassy">Sassy (+SpD, -Spe)</option>
          <option value="Serious">Serious</option>
          <option value="Timid">Timid (+Spe, -Atk)</option>
        </select>
      </div>
    );
  }
}

export default InputNature;
