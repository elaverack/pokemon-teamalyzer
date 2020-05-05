import React from 'react';
import { genItemOptions } from '../utils';
import { observer } from 'mobx-react';

@observer
class InputItem extends React.Component {
  onItemChange(event) {
    this.props.pokeState.item = event.target.value;
  }

  render() {
    return (
      <div>
        <label>Item</label>
        <input
          type="text"
          list="itemOptions"
          placeholder="(No Item)"
          value={this.props.pokeState.item}
          onChange={event => {
            this.onItemChange(event);
          }}
        />
        <datalist id="itemOptions">{genItemOptions()}</datalist>
      </div>
    );
  }
}

export default InputItem;
