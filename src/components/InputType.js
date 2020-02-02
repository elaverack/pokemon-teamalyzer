import React from "react";
import { TYPE_CHART } from "@smogon/calc";

function genTypeList() {
  return Object.keys(TYPE_CHART[8]).map(name => (
    <option value={name}>{name}</option>
  ));
}

class InputType extends React.Component {
  render() {
    return (
      <div>
        <label>Type</label>
        <select id="type1">{genTypeList()}</select>
        <select id="type2">{genTypeList()}</select>
      </div>
    );
  }
}

export default InputType;
