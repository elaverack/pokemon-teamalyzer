import React from "react";
import { genTypeOptions, genMoveOptions } from "../utils";

class InputMove extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      // QUESTION: why does the dom have a problem with duplicate ids here but not in InputStat??
      <table>
        <thead>
          <tr>
            <td>
              <input
                type="text"
                className="moveSelector"
                list="moveOptions"
                placeholder="(No Move)"
                value={this.props.moveName}
                name="moveName"
                onChange={this.props.handleChange}
                // TODO set value from state aquired from imported set, empty string shows placeholder
              />
              <datalist id="moveOptions">{genMoveOptions()}</datalist>
            </td>
            <td>
              <input
                className="movePower"
                name="movePower"
                min="0"
                max="999"
                value={this.props.movePower}
                onChange={this.props.handleRange}
              />
            </td>
            <td>
              <select
                className="move-type"
                id={this.props.index}
                value={this.props.moveType}
                onChange={this.props.handleChange}
              >
                {genTypeOptions()}
              </select>
            </td>
            <td>
              <select
                className="moveCat"
                name="moveCat"
                id={this.props.index}
                value={this.props.moveCat}
                onChange={this.props.handleChange}
              >
                <option value="Physical">Physical</option>
                <option value="Special">Special</option>
                <option value="Status">Status</option>
              </select>
            </td>
            <td>
              <button
                className="move-crit"
                title="Force this attack to be a critical hit?"
                type="button"
                onChange={this.props.onChange}
              >
                Crit
              </button>
            </td>
            <td>
              <select
                className="move-hits"
                value={this.props.hits}
                onChange={this.props.handleChange}
                hidden={this.props.moveHits < 2 && "hidden"}
              >
                <option value="2">2 hits</option>
                <option value="3">3 hits</option>
                <option value="4">4 hits</option>
                <option value="5">5 hits</option>
              </select>
            </td>
          </tr>
        </thead>
      </table>
    );
  }
}

export default InputMove;

/* OPTIONAL conditional render multi-use stat drop moves and metronome 
        <select
          className="stat-drops"
          title="How many times was this move used in a row?"
        >
          <option value="1">1 Time</option>
          <option value="2">1 Times</option>
          <option value="3">3 Times</option>
          <option value="4">4 Times</option>
          <option value="5">5 Times</option>
        </select> 
        <select
          className="metronome hide"
          title="How many times was this move successfully and consecutively used while holding Metronome before this turn?"
        >
          <option value="0">Never</option>
          <option value="1">Once</option>
          <option value="2">Twice</option>
          <option value="3">3 times</option>
          <option value="4">4 times</option>
          <option value="5">5 times</option>
        </select> */
