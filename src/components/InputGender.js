import React from "react";

// TODO set up state within component

class InputGender extends React.Component {
  render() {
    return (
      <div className="hide">
        <label>Gender</label>
        <select
          className="gender"
          name="gender"
          onChange={this.props.handleChange}
        >
          <option value="genderless">Genderless</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    );
  }
}

export default InputGender;
