import React from "react";

class InputLevel extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Level</legend>
          <input
            className="inputLevel"
            name="level"
            value={this.props.level}
            onChange={this.props.handleChange}
          />
        </fieldset>
      </div>
    );
  }
}

export default InputLevel;
