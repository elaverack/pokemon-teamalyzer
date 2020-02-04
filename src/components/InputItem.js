import React from "react";
import { genItemOptions } from "../utils";

// TODO update item input value with state

class InputItem extends React.Component {
  render() {
    return (
      <div>
        <label id="item">Item</label>
        <input
          type="text"
          className="itemSelector"
          list="itemOptions"
          placeholder="(No Item)"
        />
        <datalist id="itemOptions">{genItemOptions()}</datalist>
      </div>
    );
  }
}

export default InputItem;
