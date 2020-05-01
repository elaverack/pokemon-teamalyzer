import React from "react";
import { observer } from "mobx-react";

// TODO set up state within component
const InputGender = observer(
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
            onChange={(event) => {
              this.onGenderChange(event);
            }}
          >
            <option value="genderless">Genderless</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      );
    }
  }
);

export default InputGender;
