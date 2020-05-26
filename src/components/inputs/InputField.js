import React from 'react';
import InputFieldSide from './InputFieldSide';
import { observer } from '../../../node_modules/mobx-react/dist/index';

@observer
class InputField extends React.Component {
  render() {
    return (
      <div>
        <fieldset className="fieldInfo">
          <legend align="center">Field</legend>
          <div title="Select the battle format.">
            <label>
              <input
                type="radio"
                value="Singles"
                checked={this.props.fieldState.format === 'Singles'}
                onChange={event => {
                  this.props.fieldState.format = event.target.value;
                }}
              />
              Singles
            </label>
            <label>
              <input
                type="radio"
                value="Doubles"
                checked={this.props.fieldState.format === 'Doubles'}
                onChange={event => {
                  this.props.fieldState.format = event.target.value;
                }}
              />
              Doubles
            </label>
          </div>
          <div title="Select the current terrain.">
            Terrain:
            <select
              value={this.props.fieldState.terrain}
              onChange={event => {
                this.props.fieldState.terrain = event.target.value;
              }}>
              <option value="None">None</option>
              <option value="Electric">Electric</option>
              <option value="Grassy">Grassy</option>
              <option value="Psychic">Psychic</option>
              <option value="Misty">Misty</option>
            </select>
          </div>
          <div title="Select the current weather.">
            Weather:
            <select
              value={this.props.fieldState.weather}
              onChange={event => {
                this.props.fieldState.weather = event.target.value;
              }}>
              ><option value="None">None</option>
              <option value="Sun">Sun</option>
              <option value="Rain">Rain</option>
              <option value="Sand">Sand</option>
              <option value="Hail">Hail</option>
            </select>
          </div>
          <input
            type="checkbox"
            value={this.props.fieldState.gravity}
            onClick={() => {
              this.props.fieldState.gravity = !this.props.fieldState.gravity;
            }}
          />
          <label>Gravity</label>
          <hr />
          <table>
            <tbody>
              <tr>
                <td>
                  <InputFieldSide title="My" sideState={this.props.fieldState.sides[0]} />
                </td>
                <td>
                  <InputFieldSide title="Opponent's" sideState={this.props.fieldState.sides[1]} />
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}

export default InputField;
