import React from "react";

// TODO gather inputs into state

class InputStat extends React.Component {
  render() {
    return (
      <div>
        <thead>
          <tr hidden={this.props.title !== "HP" && "hidden"}>
            <th />
            <th className="col">Base</th>
            <th className="col">IV</th>
            <th className="col">EV</th>
            <th className="col">Stat</th>
            <th className="col">Boost</th>
          </tr>
        </thead>
        <tr className={this.props.title}>
          <th className="row">
            <label>{this.props.title}</label>
          </th>
          <td>
            {/* TODO pass value based on state */}
            <input
              className="base"
              type="number"
              defaultValue="100"
              min="0"
              max="255"
            />
          </td>
          <td>
            {/* TODO pass value based on state */}
            <input
              className="ivs"
              type="number"
              defaultValue="31"
              min="0"
              max="31"
            />
          </td>
          <td>
            <input
              className="evs"
              type="number"
              min="0"
              max="252"
              step="4"
              // TODO pass value in based on state
              defaultValue="0"
            />
          </td>
          <td>
            <output className="total">236</output>
          </td>
          <td hidden={this.props.title === "HP" && "hidden"}>
            <select className="boost" defaultValue="0">
              <option value="6">+6</option>
              <option value="5">+5</option>
              <option value="4">+4</option>
              <option value="3">+3</option>
              <option value="2">+2</option>
              <option value="1">+1</option>
              <option value="0">--</option>
              <option value="-1">-1</option>
              <option value="-2">-2</option>
              <option value="-3">-3</option>
              <option value="-4">-4</option>
              <option value="-5">-5</option>
              <option value="-6">-6</option>
            </select>
          </td>
          {/* TODO pass in stat totals with props */}
          <td hidden={this.props.title === "HP" && "hidden"}>
            <span className="totalMod">---</span>
          </td>
        </tr>
      </div>
    );
  }
}

export default InputStat;
