import React from 'react';

class InputFieldSide extends React.Component {
  render() {
    return (
      <div>
        <table className="fieldSide">
          <thead>
            <tr>
              <th scope="col">
                <div>{this.props.title} Side</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="stealthRock" title="Is Stealth Rock affecting this side of the field?">
                <input type="checkbox" />
                <label>Stealth Rock</label>
              </td>
            </tr>
            <tr>
              <td className="steelsurge" title="Is Steelsurge affecting this side of the field?">
                <input type="checkbox" />
                <label>Steelsurge</label>
              </td>
            </tr>
            <tr>
              <td className="spikes" title="Are there Spikes on this side of the field?">
                <label>Spikes: </label>
                <input type="radio" name="spikes" value="0" />
                <label>0</label>
                <input type="radio" name="spikes" value="1" />
                <label>1</label>
                <input type="radio" name="spikes" value="2" />
                <label>2</label>
                <input type="radio" name="spikes" value="3" />
                <label>3</label>
              </td>
            </tr>
            <tr>
              <td className="screens" title="Is this Pok&eacute;mon protected by Reflect and/or Light Screen?">
                <input type="checkbox" />
                <label>Reflect </label>
                <input type="checkbox" />
                <label>Light Screen</label>
              </td>
            </tr>
            <tr>
              <td className="protected" title="Is this Pok&eacute;mon protected?">
                <input type="checkbox" />
                <label>Protect</label>
              </td>
            </tr>
            <tr>
              <td className="leechSeed" title="Has this Pok&eacute;mon been affected by Leech Seed?">
                <input type="checkbox" />
                <label>Leech Seed</label>
              </td>
            </tr>
            <tr>
              <td>
                <div className="foresight" title="Has this Pok&eacute;mon been revealed with Foresight or Odor Sleuth?">
                  <input type="checkbox" />
                  <label>Foresight</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  className="helpingHand"
                  title="Has this Pok&eacute;mon's power been boosted by an ally's Helping Hand?">
                  <input type="checkbox" />
                  <label>Helping Hand</label>
                </div>
              </td>
            </tr>
            <tr>
              <td className="tailwind" title="Has this Pok&eacute;mon's speed been boosted by Tailwind?">
                <input className="tailwindCheck" type="checkbox" />
                <label>Tailwind</label>
              </td>
            </tr>
            <tr>
              <td className="friendGuard" title="Is the Pok&eacute;mon protected by an ally's Friend Guard?">
                <input type="checkbox" />
                <label>Friend Guard</label>
              </td>
            </tr>
            <tr>
              <td className="auroraVeil" title="Is the Pok&eacute;mon protected by an ally's Aurora Veil?">
                <input type="checkbox" />
                <label>Aurora Veil</label>
              </td>
            </tr>
            <tr>
              <td className="allBoost" title="Has the Pok&eacute;mon boosted all its stats one stage?">
                <input type="checkbox" />
                <label>+1 All Stats</label>
              </td>
            </tr>
            <tr>
              <td className="battery" title="Is the Pok&eacute;mon boosted by an ally's Battery ability?">
                <input type="checkbox" />
                <label>Battery</label>
              </td>
            </tr>
            <tr>
              <td className="switching" title="Is this Pok&eacute;mon switching out?">
                <input type="checkbox" />
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
