import React from "react";

class InputHP extends React.Component {
  render() {
    return (
      <div>
        <label>{"Current HP:  "}</label>
        <input
          type="number"
          value={this.props.curHP}
          max={this.props.maxHP}
          min="0"
          onChange={this.props.handleRange}
        />
        /<output>{this.props.maxHP}</output>
        {" : "}(<output>{this.props.percentHP}</output>
        %)
      </div>
    );
  }
}

export default InputHP;
