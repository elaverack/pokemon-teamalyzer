import React from "react";
import { genTypeOptions } from "../utils";

class InputType extends React.Component {
  render() {
    return (
      <div>
        <label>Type</label>
        {/* TODO set defaultvalue with state props */}
        <select
          name="types"
          id="0"
          value={this.props.types[0]}
          onChange={this.props.handleChange}
        >
          {genTypeOptions()}
        </select>
        <select
          name="types"
          id="1"
          value={this.props.types[1]}
          onChange={this.props.handleChange}
        >
          {genTypeOptions()}
        </select>
      </div>
    );
  }
}

export default InputType;
