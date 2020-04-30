import React from "react";
import { observer } from "mobx-react";
import { handleRange } from "../utils";

// TODO gather inputs into state
const InputStat = observer(
  class InputStat extends React.Component {
    onBaseChange(event) {
      let input = handleRange(event);
      this.props.pokeState.baseVals[this.props.index] = input;
    }
    onIvChange(event) {
      let input = handleRange(event);
      this.props.pokeState.ivVals[this.props.index] = input;
    }
    onEvChange(event) {
      let input = handleRange(event);
      this.props.pokeState.evVals[this.props.index] = input;
    }
    onBoostChange(event) {
      this.props.pokeState.boosts[this.props.index] = event.target.value;
    }

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
            <tr>
              <th className="row">
                <label>{this.props.title}: </label>
              </th>
              <td>
                {/* <input
                  className="base"
                  name="baseVal"
                  type="number"
                  min="1"
                  max="255"
                  step="1"
                  value={this.props.pokeState.baseVals[this.props.index]}
                  onChange={(event) => {
                    this.onBaseChange(event);
                  }}
                /> */}
                {this.props.pokeState.baseVals[this.props.index]}
              </td>
              <td>
                <input
                  className="ivs"
                  name="ivVal"
                  value={this.props.pokeState.ivVals[this.props.index]}
                  type="number"
                  min="0"
                  max="31"
                  step="1"
                  onChange={(event) => {
                    this.onIvChange(event);
                  }}
                />
              </td>
              <td>
                <input
                  className="evs"
                  name="evVal"
                  value={this.props.pokeState.evVals[this.props.index]}
                  type="number"
                  min="0"
                  max="252"
                  step="4"
                  onChange={(event) => {
                    this.onEvChange(event);
                  }}
                />
              </td>
              <td>
                <output>{this.props.pokeState.stat(this.props.index)}</output>
              </td>
              <td hidden={this.props.title === "HP" && "hidden"}>
                <select
                  className="boost"
                  name="boost"
                  value={this.props.pokeState.boosts[this.props.index]}
                  onChange={(event) => {
                    this.onBoostChange(event);
                  }}
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
              {/* TODO pass in modded stat totals with props */}
              <td hidden={this.props.title === "HP" && "hidden"}>
                <span className="totalMod"></span>
              </td>
            </tr>
          </thead>
        </table>
      );
    }
  }
);

export default InputStat;
