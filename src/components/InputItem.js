import React from "react";
import { genItemOptions } from "../utils";
import { observer } from "mobx-react";

const InputItem = observer(
  class InputItem extends React.Component {
    onItemChange(event) {
      this.props.pokeState.item = event.target.value;
    }

    render() {
      return (
        <div>
          <label id="item">Item</label>
          <input
            type="text"
            className="itemSelector"
            list="itemOptions"
            placeholder="(No Item)"
            name="item"
            value={this.props.pokeState.item}
            onChange={(event) => {
              this.onItemChange(event);
            }}
          />
          <datalist id="itemOptions">{genItemOptions()}</datalist>
        </div>
      );
    }
  }
);

export default InputItem;
