import React from "react";
import { genTypeOptions, genMoveOptions } from "../utils";

//// PROPS
/* <InputMove
key={i}
moveName={this.state.moves[i].name}
movePower={this.state.moves[i].power}
moveType={this.state.moves[i].type}
moveCat={this.state.moves[i].cat}
isMulti={this.state.moves[i].isMulti}
hitNum={this.state.moves[i].hitNum}
isMax={this.state.moves[i].isMax}
handleChange={event => this.handleChange(event)}
handleRange={event => this.handleRange(event)}
/> */

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
                id={this.props.index}
                // TODO set value from state aquired from imported set, empty string shows placeholder
              />
              <datalist className="moveOptions">{genMoveOptions()}</datalist>
            </td>
            <td>
              <input
                className="movePower"
                name="movePower"
                min="0"
                max="999"
                id={this.props.index}
                value={this.props.movePower}
                onChange={this.props.handleRange}
              />
            </td>
            <td>
              <select
                className="move-type"
                id={this.props.index}
                value={this.props.moveType}
                onChange={this.props.onChange}
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
                onChange={this.props.onChange}
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
              >
                Crit
              </button>
            </td>
            {/* TODO Support Max move toggle when available
                  <button
                    className="move-max"
                    title="Force this attack to be a Max move?"
                    type="button"
                  >
                    Max
                  </button> */}
            {/* TODO conditional render the move hits for multi-attack moves */}
            <td>
              <select className="move-hits" defaultValue="3">
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
