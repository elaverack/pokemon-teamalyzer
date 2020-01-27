import React from "react";
import StatInput from "./StatInput";
import MoveInput from "./MoveInput";
/* TODO
sort through this mess
update state using the pokemon class from the calc to fill in blanks
*/

class PokemonInput extends React.Component {
  render() {
    return (
      <div aria-label="Pok&eacute;mon 1" className="panel" role="region">
        <fieldset className="poke-info" id="p1">
          <legend align="center">Pok&eacute;mon 1</legend>
          <input type="text" className="set-selector" />
          <span
            id="importedSetsOptions"
            style={{ width: "auto", display: "none" }}
          >
            <input type="checkbox" id="importedSets" /> Only show imported sets{" "}
            <br />
            <button id="clearSets">Clear Custom Sets</button>
          </span>
          <div className="info-group top">
            <div>
              <label>Type</label>
              <select
                aria-label="type1"
                className="type1 terrain-trigger calc-trigger"
              ></select>
              <select
                aria-label="type2"
                className="type2 terrain-trigger calc-trigger"
              ></select>
            </div>
            <div className="hide">
              <label>Forme</label>
              <select className="forme calc-trigger"></select>
            </div>
            <div className="hide">
              <label>Gender</label>
              <select className="gender calc-trigger" defaultValue="Male">
                <option>Genderless</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label id="levelL1">Level</label>
              <input className="level calc-trigger" id="levelL1" value="100" />
            </div>
            <div className="hide">
              <label id="weightL1">Weight (kg)</label>
              <input
                className="weight calc-trigger"
                id="weightL1"
                value="10.0"
              />
            </div>
          </div>
          <StatInput />
          <div className="info-group info-selectors">
            <div className="gen-specific g3 g4 g5 g6 g7 g8">
              <label id="natureL1">Nature</label>
              <select
                className="nature calc-trigger"
                id="natureL1"
                defaultValue="Hardy"
              >
                <option value="Adamant">Adamant (+Atk, -SpA)</option>
                <option value="Bashful">Bashful</option>
                <option value="Bold">Bold (+Def, -Atk)</option>
                <option value="Brave">Brave (+Atk, -Spe)</option>
                <option value="Calm">Calm (+SpD, -Atk)</option>
                <option value="Careful">Careful (+SpD, -SpA)</option>
                <option value="Docile">Docile</option>
                <option value="Gentle">Gentle (+SpD, -Def)</option>
                <option value="Hardy">Hardy</option>
                <option value="Hasty">Hasty (+Spe, -Def)</option>
                <option value="Impish">Impish (+Def, -SpA)</option>
                <option value="Jolly">Jolly (+Spe, -SpA)</option>
                <option value="Lax">Lax (+Def, -SpD)</option>
                <option value="Lonely">Lonely (+Atk, -Def)</option>
                <option value="Mild">Mild (+SpA, -Def)</option>
                <option value="Modest">Modest (+SpA, -Atk)</option>
                <option value="Naive">Naive (+Spe, -SpD)</option>
                <option value="Naughty">Naughty (+Atk, -SpD)</option>
                <option value="Quiet">Quiet (+SpA, -Spe)</option>
                <option value="Quirky">Quirky</option>
                <option value="Rash">Rash (+SpA, -SpD)</option>
                <option value="Relaxed">Relaxed (+Def, -Spe)</option>
                <option value="Sassy">Sassy (+SpD, -Spe)</option>
                <option value="Serious">Serious</option>
                <option value="Timid">Timid (+Spe, -Atk)</option>
              </select>
            </div>
            <div className="gen-specific g3 g4 g5 g6 g7 g8">
              <label id="abilityL1">Ability</label>
              <select
                className="ability terrain-trigger calc-trigger"
                id="abilityL1"
              ></select>
              <input
                type="checkbox"
                title="Is this ability active?"
                className="abilityToggle calc-trigger"
              />
            </div>
            <div className="gen-specific g2 g3 g4 g5 g6 g7 g8">
              <label id="itemL1">Item</label>
              <select
                className="item terrain-trigger calc-trigger"
                id="itemL1"
              ></select>
            </div>
            <div>
              <label id="statusL1">Status</label>
              <select className="status calc-trigger" id="statusL1">
                <option value="Healthy">Healthy</option>
                <option value="Poisoned">Poisoned</option>
                <option value="Badly Poisoned">Badly Poisoned</option>
                <option value="Burned">Burned</option>
                <option value="Paralyzed">Paralyzed</option>
                <option value="Asleep">Asleep</option>
                <option value="Frozen">Frozen</option>
              </select>
              <select
                aria-label="Toxic counter"
                className="toxic-counter calc-trigger hide"
              >
                <option value="1">1/16</option>
                <option value="2">2/16</option>
                <option value="3">3/16</option>
                <option value="4">4/16</option>
                <option value="5">5/16</option>
                <option value="6">6/16</option>
                <option value="7">7/16</option>
                <option value="8">8/16</option>
                <option value="9">9/16</option>
                <option value="10">10/16</option>
                <option value="11">11/16</option>
                <option value="12">12/16</option>
                <option value="13">13/16</option>
                <option value="14">14/16</option>
                <option value="15">15/16</option>
              </select>
            </div>
          </div>
          <div className="info-group">
            <label id="currentHpL1">Current HP</label>
            <input
              className="current-hp calc-trigger"
              id="currentHpL1"
              value="341"
            />
            /<span className="max-hp">341</span> (
            <input className="percent-hp calc-trigger" value="100" />
            %)
            <br />
            <br />
            Health <div className="hpbar"></div>
          </div>
          <MoveInput />
        </fieldset>
      </div>
    );
  }
}

export default PokemonInput;
