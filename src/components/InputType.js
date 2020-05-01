import React from "react";
import { observer } from "mobx-react";
import { genTypeOptions } from "../utils";

const InputType = observer(
  class InputType extends React.Component {
    onTypeChange(event) {
      this.props.pokeState.types[event.target.id] = event.target.value;
      if (this.props.pokeState.types[0] === this.props.pokeState.types[1]) {
        this.props.pokeState.types[1] = "None";
      }
    }

    render() {
      return (
        <div>
          <label>Type</label>
          <select
            id="0"
            value={this.props.pokeState.types[0]}
            onChange={(event) => {
              this.onTypeChange(event);
            }}
          >
            {genTypeOptions()}
          </select>
          <select
            id="1"
            value={this.props.pokeState.types[1]}
            onChange={(event) => {
              this.onTypeChange(event);
            }}
          >
            {genTypeOptions()}
          </select>
        </div>
      );
    }
  }
);

export default InputType;
