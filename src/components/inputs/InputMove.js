import React from 'react';
import { observer } from 'mobx-react';
import { Move } from '@smogon/calc';
import { genTypeOptions, genMoveOptions, validMove, gen, handleRange } from '../../utils';

@observer
class InputMove extends React.Component {
  onMoveChange(event) {
    let input = event.target.value;
    this.props.moveState.name = event.target.value;
    if (validMove(input)) {
      let { type, bp, category, hits } = new Move(gen, input);
      this.props.moveState.type = type;
      this.props.moveState.bp = bp;
      this.props.moveState.category = category;
      this.props.moveState.hits = hits;
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td title="Should this move be included in the analysis?">
              {/* TODO decide if include toggle label is necessary */}
              {/* <label>Include?</label> */}
              <input
                type="checkbox"
                checked={this.props.moveState.include}
                onChange={() => {
                  this.props.moveState.include = !this.props.moveState.include;
                }}
              />
            </td>
            <td>
              <input
                type="text"
                list="moveOptions"
                placeholder="(No Move)"
                value={this.props.moveState.name}
                onChange={event => {
                  this.onMoveChange(event);
                }}
              />
              <datalist id="moveOptions">{genMoveOptions()}</datalist>
            </td>
            <td>
              <input
                min="0"
                max="999"
                value={this.props.moveState.bp}
                onChange={event => {
                  let input = handleRange(event);
                  this.props.moveState.bp = input;
                }}
              />
            </td>
            <td>
              <select
                id={this.props.index}
                value={this.props.moveState.type}
                onChange={event => {
                  this.props.moveState.type = event.target.value;
                }}>
                {genTypeOptions()}
              </select>
            </td>
            <td>
              <select
                id={this.props.index}
                value={this.props.moveState.category}
                onChange={event => {
                  this.props.moveState.category = event.target.value;
                }}>
                <option value="Physical">Physical</option>
                <option value="Special">Special</option>
                <option value="Status">Status</option>
              </select>
            </td>
            <td>
              <button
                title="Force this attack to be a critical hit?"
                type="button"
                onClick={() => {
                  this.props.moveState.crit = !this.props.moveState.crit;
                }}>
                Crit
              </button>
            </td>
            <td>
              <select
                hidden={this.props.moveState.hits < 2 && 'hidden'}
                value={this.props.moveState.hits}
                onChange={event => {
                  this.props.moveState.hits = event.target.value;
                }}>
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
