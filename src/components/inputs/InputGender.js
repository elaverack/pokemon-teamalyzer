import React from 'react';
import { observer } from 'mobx-react';

@observer
class InputGender extends React.Component {
  onGenderChange(event) {
    this.props.pokeState.gender = event.target.value;
  }

  render() {
    return (
      <div>
        <label>Gender: </label>
        <select
          value={this.props.pokeState.gender}
          onChange={event => {
            this.onGenderChange(event);
          }}>
          <option value="Genderless">Genderless</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    );
  }
}

export default InputGender;
