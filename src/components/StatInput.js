import React from "react";

// TODO gather inputs into state

class StatInput extends React.Component {
  render() {
    return (
      <div>
        {/* TODO conditional render column headers */}
        <thead>
          <tr>
            <th />
            <th className="col">Base</th>
            <th className="col">IV</th>
            <th className="col">EV</th>
            <th className="col">Stat</th>
            <th className="col">Boost</th>
          </tr>
        </thead>
        <tr className="at">
          <th className="row">
            {/* TODO pass in row title via props */}
            <label>Attack</label>
          </th>
          <td>
            <input className="base" defaultValue="100" min="0" />
          </td>
          <td>
            <input className="ivs" defaultValue="31" min="0" max="31" />
          </td>
          <td>
            <input
              className="evs"
              type="number"
              min="0"
              max="252"
              step="4"
              defaultValue="0"
            />
          </td>
          <td>
            <span className="total">236</span>
          </td>
          <td>
            <select className="boost" defaultValue="0">
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
          <td>
            <span className="totalMod">---</span>
          </td>
        </tr>
      </div>
    );
  }
}

export default StatInput;
