import React from 'react';
import { observer } from '../../../node_modules/mobx-react/dist/index';

@observer
class InputFieldSide extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <div>{this.props.title} Side</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td title="Is Stealth Rock affecting this side of the field?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.stealthrock}
                  onChange={() => {
                    this.props.sideState.stealthrock = !this.props.sideState.stealthrock;
                  }}
                />
                <label>Stealth Rock</label>
              </td>
            </tr>
            <tr>
              <td title="Is Steelsurge affecting this side of the field?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.steelsurge}
                  onChange={() => {
                    this.props.sideState.steelsurge = !this.props.sideState.steelsurge;
                  }}
                />
                <label>SteelSurge</label>
              </td>
            </tr>
            <tr>
              <td title="Are there Spikes on this side of the field?">
                <label>Spikes: </label>
                <input
                  type="radio"
                  value="0"
                  checked={this.props.sideState.spikes === '0'}
                  onChange={event => {
                    this.props.sideState.spikes = event.target.value;
                  }}
                />
                <label>0</label>
                <input
                  type="radio"
                  value="1"
                  checked={this.props.sideState.spikes === '1'}
                  onChange={event => {
                    this.props.sideState.spikes = event.target.value;
                  }}
                />
                <label>1</label>
                <input
                  type="radio"
                  value="2"
                  checked={this.props.sideState.spikes === '2'}
                  onChange={event => {
                    this.props.sideState.spikes = event.target.value;
                  }}
                />
                <label>2</label>
                <input
                  type="radio"
                  value="3"
                  checked={this.props.sideState.spikes === '3'}
                  onChange={event => {
                    this.props.sideState.spikes = event.target.value;
                  }}
                />
                <label>3</label>
              </td>
            </tr>
            <tr>
              <td title="Is this Pok&eacute;mon protected by Reflect and/or Light Screen?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.reflect}
                  onChange={() => {
                    this.props.sideState.reflect = !this.props.sideState.reflect;
                  }}
                />
                <label>Reflect </label>
                <input
                  type="checkbox"
                  checked={this.props.sideState.lightscreen}
                  onChange={() => {
                    this.props.sideState.lightscreen = !this.props.sideState.lightscreen;
                  }}
                />
                <label>Light Screen</label>
              </td>
            </tr>
            <tr>
              <td title="Is this Pok&eacute;mon protected?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.protect}
                  onChange={() => {
                    this.props.sideState.protect = !this.props.sideState.protect;
                  }}
                />
                <label>Protect</label>
              </td>
            </tr>
            <tr>
              <td title="Has this Pok&eacute;mon been affected by Leech Seed?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.leechseed}
                  onChange={() => {
                    this.props.sideState.leechseed = !this.props.sideState.leechseed;
                  }}
                />
                <label>Leech Seed</label>
              </td>
            </tr>
            <tr>
              <td>
                <div title="Has this Pok&eacute;mon been revealed with Foresight or Odor Sleuth?">
                  <input
                    type="checkbox"
                    checked={this.props.sideState.foresight}
                    onChange={() => {
                      this.props.sideState.foresight = !this.props.sideState.foresight;
                    }}
                  />
                  <label>Foresight</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div title="Has this Pok&eacute;mon's power been boosted by an ally's Helping Hand?">
                  <input
                    type="checkbox"
                    checked={this.props.sideState.helpinghand}
                    onChange={() => {
                      this.props.sideState.helpinghand = !this.props.sideState.helpinghand;
                    }}
                  />
                  <label>Helping Hand</label>
                </div>
              </td>
            </tr>
            <tr>
              <td title="Has this Pok&eacute;mon's speed been boosted by Tailwind?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.tailwind}
                  onChange={() => {
                    this.props.sideState.tailwind = !this.props.sideState.tailwind;
                  }}
                />
                <label>Tailwind</label>
              </td>
            </tr>
            <tr>
              <td title="Is the Pok&eacute;mon protected by an ally's Friend Guard?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.friendguard}
                  onChange={() => {
                    this.props.sideState.friendguard = !this.props.sideState.friendguard;
                  }}
                />
                <label>Friend Guard</label>
              </td>
            </tr>
            <tr>
              <td title="Is the Pok&eacute;mon protected by an ally's Aurora Veil?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.auroraveil}
                  onChange={() => {
                    this.props.sideState.auroraveil = !this.props.sideState.auroraveil;
                  }}
                />
                <label>Aurora Veil</label>
              </td>
            </tr>
            {/* <tr>
              <td title="Has the Pok&eacute;mon boosted all its stats one stage?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.allboost}
                  onChange={() => {
                    this.props.sideState.allboost = !this.props.sideState.allboost;
                  }}
                />
                <label>+1 All Stats</label>
              </td>
            </tr> */}
            <tr>
              <td title="Is the Pok&eacute;mon boosted by an ally's Battery ability?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.battery}
                  onChange={() => {
                    this.props.sideState.battery = !this.props.sideState.battery;
                  }}
                />
                <label>Battery</label>
              </td>
            </tr>
            <tr>
              <td title="Is this Pok&eacute;mon switching out?">
                <input
                  type="checkbox"
                  checked={this.props.sideState.switching}
                  onChange={() => {
                    this.props.sideState.switching = !this.props.sideState.switching;
                  }}
                />
                <label>Switching Out</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InputFieldSide;
