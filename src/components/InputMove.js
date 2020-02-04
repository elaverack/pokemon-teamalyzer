import React from "react";
import { genTypeOptions, genMoveOptions } from "../utils";

class InputMove extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div className="move">
        <input
          type="text"
          className="moveSelector"
          list="moveOptions"
          placeholder="(No Move)"
          // TODO set value from state aquired from imported set, empty string shows placeholder
        />
        <datalist id="moveOptions">{genMoveOptions()}</datalist>
        <input className="move-bp" defaultValue="0" />
        {/* TODO set type defaultValue to move default */}
        <select id="move-type">{genTypeOptions()}</select>
        <select className="move-cat">
          <option value="Physical">Physical</option>
          <option value="Special">Special</option>
          <option value="Status">Status</option>
        </select>
        <button
          className="move-crit"
          title="Force this attack to be a critical hit?"
          type="button"
        >
          Crit
        </button>
        {/* TODO Support Max move toggle when available
        <button
          className="move-max"
          title="Force this attack to be a Max move?"
          type="button"
        >
          Max
        </button> */}
        {/* TODO conditional render the move hits for multi-attack moves */}
        <select className="move-hits" defaultValue="3">
          <option value="2">2 hits</option>
          <option value="3">3 hits</option>
          <option value="4">4 hits</option>
          <option value="5">5 hits</option>
        </select>
        {/* OPTIONAL conditional render multi-use stat drop moves and metronome 
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
        </select> */}
      </div>
    );
  }
}

export default InputMove;
