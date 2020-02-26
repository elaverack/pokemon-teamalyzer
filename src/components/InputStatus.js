import React from "react";

//TODO add state conditions

class InputStatus extends React.Component {
  render() {
    return (
      <div>
        <label id="status">Status</label>
        <select
          className="status"
          name="status"
          value={this.props.status}
          onChange={this.props.handleChange}
        >
          <option value="Healthy">Healthy</option>
          <option value="Poisoned">Poisoned</option>
          {/* <option value="Badly Poisoned">Badly Poisoned</option> */}
          <option value="Burned">Burned</option>
          <option value="Paralyzed">Paralyzed</option>
          <option value="Asleep">Asleep</option>
          <option value="Frozen">Frozen</option>
        </select>
        <select
          // OPTIONAL allow for badly poisoned status
          aria-label="Toxic counter"
          className="toxic-counter"
          hidden
        >
          <option value="1">1/16</option>
          <option value="2">2/16</option>
          <option value="3">3/16</option>
          <option value="4">4/16</option>
          <option value="5">5/16</option>
          <option value="6">6/16</option>
          <option value="7">7/16</option>
          <option value="8">8/16</option>
          <option value="9">9/16</option>
          <option value="10">10/16</option>
          <option value="11">11/16</option>
          <option value="12">12/16</option>
          <option value="13">13/16</option>
          <option value="14">14/16</option>
          <option value="15">15/16</option>
        </select>
      </div>
    );
  }
}

export default InputStatus;
