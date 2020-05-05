import React from 'react';
import InputFieldSide from './InputFieldSide';

class InputField extends React.Component {
  render() {
    return (
      <div>
        <fieldset className="fieldInfo">
          <legend align="center">Field</legend>
          <div title="Select the battle format.">
            <input type="radio" name="format" value="Singles" />
            <label>Singles</label>
            <input type="radio" name="format" value="Doubles" />
            <label>Doubles</label>
          </div>
          <div className="terrainSelector" title="Select the current terrain.">
            Terrain:
            <select className="terrain" name="terrain">
              <option value="None">None</option>
              <option value="Electric">Electric</option>
              <option value="Grassy">Grassy</option>
              <option value="Psychic">Psychic</option>
              <option value="Misty">Misty</option>
            </select>
          </div>
          <div className="weatherSelector" title="Select the current weather.">
            Weather:
            <select className="weather" name="weather">
              <option value="None">None</option>
              <option value="Sun">Sun</option>
              <option value="Rain">Rain</option>
              <option value="Sand">Sand</option>
              <option value="Hail">Hail</option>
            </select>
          </div>
          <input className="gravityButton" value="Gravity" type="button" />
          <hr />
          <table>
            <tbody>
              <tr>
                <td>
                  <InputFieldSide title="My" />
                </td>
                <td>
                  <InputFieldSide title="Opponent's" />
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
