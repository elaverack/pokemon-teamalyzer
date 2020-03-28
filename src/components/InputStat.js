import React from "react";

// TODO gather inputs into state

class InputStat extends React.Component {
  render() {
    return (
      <table>
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
        <thead>
          <tr className={this.props.title}>
            <th className="row">
              <label>{this.props.title}</label>
            </th>
            <td>
              <input
                className="base"
                name="baseVal"
                id={this.props.index}
                type="number"
                min="0"
                max="255"
                step="1"
                value={this.props.baseVal}
                onChange={this.props.handleRange}
              />
            </td>
            <td>
              <input
                className="ivs"
                name="ivVal"
                value={this.props.ivVal}
                onChange={this.props.handleRange}
                id={this.props.index}
                type="number"
                min="0"
                max="31"
                step="1"
              />
            </td>
            <td>
              <input
                className="evs"
                name="evVal"
                value={this.props.evVal}
                onChange={this.props.handleRange}
                id={this.props.index}
                type="number"
                min="0"
                max="252"
                step="4"
              />
            </td>
            <td>
              <output className="total">{this.props.stat}</output>
            </td>
            <td hidden={this.props.title === "HP" && "hidden"}>
              <select
                className="boost"
                name="boost"
                value={this.props.boost}
                onChange={this.props.handleChange}
                id={this.props.index}
              >
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
              <span className="totalMod"></span>
            </td>
          </tr>
        </thead>
      </table>
    );
  }
}

export default InputStat;
