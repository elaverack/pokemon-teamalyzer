import React from "react";

// TODO set and read current hp, % hp, and max hp value with state

class InputHP extends React.Component {
  handleRange(event) {
    const input = event.target;
    if (input.value < parseInt(input.min, 10)) {
      input.value = input.min;
      this.props.handleChange(event);
    } else if (input.value > parseInt(input.max, 10)) {
      input.value = input.max;
      this.props.handleChange(event);
    } else {
      this.props.handleChange(event);
    }
  }

  render() {
    return (
      <div>
        <label id="currentHP">{"Current HP:  "}</label>
        <input
          type="number"
          className="currentHP"
          id="currentHP"
          name="curHP"
          value={this.props.curHP}
          max={this.props.maxHP}
          min="0"
          onChange={event => this.handleRange(event)}
        />
        /<output className="maxHP">{this.props.maxHP}</output>
        {" : "}(<output className="percentHP">{this.props.percentHP}</output>
        %)
      </div>
    );
  }
}

export default InputHP;
