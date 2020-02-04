import React from "react";
import { genTypeOptions } from "../utils";

class InputType extends React.Component {
  render() {
    return (
      <div>
        <label>Type</label>
        {/* TODO set defaultvalue with state props */}
        <select id="type1">{genTypeOptions()}</select>
        <select id="type2">{genTypeOptions()}</select>
      </div>
    );
  }
}

export default InputType;
