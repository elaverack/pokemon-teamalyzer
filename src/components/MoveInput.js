import React from "react";

class MoveInput extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div className="move4">
        <select className="move-selector calc-trigger small-select"></select>
        <input className="move-bp calc-trigger" value="0" />
        <select className="move-type calc-trigger"></select>
        <select className="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8">
          <option value="Physical">Physical</option>
          <option value="Special">Special</option>
        </select>
        <input
          aria-describedby="criticalHitInstruction"
          className="move-crit calc-trigger visually-hidden"
          type="checkbox"
          id="critL4"
        />
        <label
          className="btn crit-btn"
          id="critL4"
          title="Force this attack to be a critical hit?"
        >
          Crit
        </label>
        <input
          aria-describedby="zMoveInstruction"
          className="move-z calc-trigger visually-hidden"
          type="checkbox"
          id="zL4"
        />
        <label
          className="btn z-btn gen-specific g7"
          id="zL4"
          title="Make this attack a Z-move?"
        >
          Z
        </label>
        <select className="move-hits calc-trigger hide">
          <option value="2">2 hits</option>
          <option value="3">3 hits</option>
          <option value="4">4 hits</option>
          <option value="5">5 hits</option>
        </select>
        <select
          className="stat-drops calc-trigger hide"
          title="How many times was this move used in a row?"
        >
          ><option value="1">Once</option>
          <option value="2">Twice</option>
          <option value="3">3 times</option>
          <option value="4">4 times</option>
          <option value="5">5 times</option>
        </select>
        <select
          className="metronome calc-trigger hide"
          title="How many times was this move successfully and consecutively used while holding Metronome before this turn?"
        >
          <option value="0">Never</option>
          <option value="1">Once</option>
          <option value="2">Twice</option>
          <option value="3">3 times</option>
          <option value="4">4 times</option>
          <option value="5">5 times</option>
        </select>
      </div>
    );
  }
}

export default MoveInput;
