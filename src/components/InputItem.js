import React from "react";

class InputItem extends React.Component {
  render() {
    return (
      <div>
        <label id="itemL1">Item</label>
        <select
          className="item terrain-trigger calc-trigger"
          id="itemL1"
        ></select>
      </div>
    );
  }
}

export default InputItem;
