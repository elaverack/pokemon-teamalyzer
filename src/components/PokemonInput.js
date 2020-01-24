import React from "react";

/* TODO
sort through this mess
break up stat rows into their own components?
break up move rows into components?
use formik to make inputs easier?
update state using the pokemon class from the calc to fill in blanks
*/

class PokemonInput extends React.Component {
  render() {
    return (
      <div aria-label="Pok&eacute;mon 1" class="panel" role="region">
        <fieldset class="poke-info" id="p1">
          <legend align="center">Pok&eacute;mon 1</legend>
          <input type="text" class="set-selector" />
          <span
            id="importedSetsOptions"
            style={{ width: "auto", display: "none" }}
          >
            <input type="checkbox" id="importedSets" /> Only show imported sets{" "}
            <br />
            <button id="clearSets">Clear Custom Sets</button>
          </span>
          <div class="info-group top">
            <div>
              <label>Type</label>
              <select
                aria-label="type1"
                class="type1 terrain-trigger calc-trigger"
              ></select>
              <select
                aria-label="type2"
                class="type2 terrain-trigger calc-trigger"
              ></select>
            </div>
            <div class="hide">
              <label>Forme</label>
              <select class="forme calc-trigger"></select>
            </div>
            <div class="hide">
              <label>Gender</label>
              <select class="gender calc-trigger">
                <option></option>
                <option selected="selected">Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label for="levelL1">Level</label>
              <input class="level calc-trigger" id="levelL1" value="100" />
            </div>
            <div class="hide">
              <label for="weightL1">Weight (kg)</label>
              <input class="weight calc-trigger" id="weightL1" value="10.0" />
            </div>
          </div>
          <div class="info-group">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Base</th>
                  <th class="gen-specific g3 g4 g5 g6 g7 g8" scope="col">
                    IVs
                  </th>
                  <th class="gen-specific g3 g4 g5 g6 g7 g8" scope="col">
                    EVs
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="hp">
                  <th scope="row">
                    <label>HP</label>
                  </th>
                  <td>
                    <input class="base calc-trigger" value="100" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input class="ivs calc-trigger" value="31" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input
                      class="evs calc-trigger"
                      type="number"
                      min="0"
                      max="252"
                      step="4"
                      value="0"
                    />
                  </td>
                  <td>
                    <span class="total">341</span>
                  </td>
                  <td></td>
                </tr>
                <tr class="at">
                  <th scope="row">
                    <label>Attack</label>
                  </th>
                  <td>
                    <input class="base calc-trigger" value="100" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input class="ivs calc-trigger" value="31" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input
                      class="evs calc-trigger"
                      type="number"
                      min="0"
                      max="252"
                      step="4"
                      value="0"
                    />
                  </td>
                  <td>
                    <span class="total">236</span>
                  </td>
                  <td>
                    <select class="boost calc-trigger">
                      <option value="6">+6</option>
                      <option value="5">+5</option>
                      <option value="4">+4</option>
                      <option value="3">+3</option>
                      <option value="2">+2</option>
                      <option value="1">+1</option>
                      <option value="0" selected="selected">
                        --
                      </option>
                      <option value="-1">-1</option>
                      <option value="-2">-2</option>
                      <option value="-3">-3</option>
                      <option value="-4">-4</option>
                      <option value="-5">-5</option>
                      <option value="-6">-6</option>
                    </select>
                  </td>
                </tr>
                <tr class="df">
                  <th scope="row">
                    <label>Defense</label>
                  </th>
                  <td>
                    <input class="base calc-trigger" value="100" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input class="ivs calc-trigger" value="31" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input
                      class="evs calc-trigger"
                      type="number"
                      min="0"
                      max="252"
                      step="4"
                      value="0"
                    />
                  </td>
                  <td>
                    <span class="total">236</span>
                  </td>
                  <td>
                    <select class="boost calc-trigger">
                      <option value="6">+6</option>
                      <option value="5">+5</option>
                      <option value="4">+4</option>
                      <option value="3">+3</option>
                      <option value="2">+2</option>
                      <option value="1">+1</option>
                      <option value="0" selected="selected">
                        --
                      </option>
                      <option value="-1">-1</option>
                      <option value="-2">-2</option>
                      <option value="-3">-3</option>
                      <option value="-4">-4</option>
                      <option value="-5">-5</option>
                      <option value="-6">-6</option>
                    </select>
                  </td>
                </tr>
                <tr class="sa gen-specific g2 g3 g4 g5 g6 g7 g8">
                  <th scope="row">
                    <label>Sp. Atk</label>
                  </th>
                  <td>
                    <input class="base calc-trigger" value="100" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input class="ivs calc-trigger" value="31" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input
                      class="evs calc-trigger"
                      type="number"
                      min="0"
                      max="252"
                      step="4"
                      value="0"
                    />
                  </td>
                  <td>
                    <span class="total">236</span>
                  </td>
                  <td>
                    <select class="boost calc-trigger">
                      <option value="6">+6</option>
                      <option value="5">+5</option>
                      <option value="4">+4</option>
                      <option value="3">+3</option>
                      <option value="2">+2</option>
                      <option value="1">+1</option>
                      <option value="0" selected="selected">
                        --
                      </option>
                      <option value="-1">-1</option>
                      <option value="-2">-2</option>
                      <option value="-3">-3</option>
                      <option value="-4">-4</option>
                      <option value="-5">-5</option>
                      <option value="-6">-6</option>
                    </select>
                  </td>
                </tr>
                <tr class="sd gen-specific g2 g3 g4 g5 g6 g7 g8">
                  <th scope="row">
                    <label>Sp. Def</label>
                  </th>
                  <td>
                    <input class="base calc-trigger" value="100" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input class="ivs calc-trigger" value="31" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input
                      class="evs calc-trigger"
                      type="number"
                      min="0"
                      max="252"
                      step="4"
                      value="0"
                    />
                  </td>
                  <td>
                    <span class="total">236</span>
                  </td>
                  <td>
                    <select class="boost calc-trigger">
                      <option value="6">+6</option>
                      <option value="5">+5</option>
                      <option value="4">+4</option>
                      <option value="3">+3</option>
                      <option value="2">+2</option>
                      <option value="1">+1</option>
                      <option value="0" selected="selected">
                        --
                      </option>
                      <option value="-1">-1</option>
                      <option value="-2">-2</option>
                      <option value="-3">-3</option>
                      <option value="-4">-4</option>
                      <option value="-5">-5</option>
                      <option value="-6">-6</option>
                    </select>
                  </td>
                </tr>
                <tr class="sp">
                  <th scope="row">
                    <label>Speed</label>
                  </th>
                  <td>
                    <input class="base calc-trigger" value="100" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input class="ivs calc-trigger" value="31" />
                  </td>
                  <td class="gen-specific g3 g4 g5 g6 g7 g8">
                    <input
                      class="evs calc-trigger"
                      type="number"
                      min="0"
                      max="252"
                      step="4"
                      value="0"
                    />
                  </td>
                  <td>
                    <span class="total">236</span>
                  </td>
                  <td>
                    <select class="boost calc-trigger">
                      <option value="6">+6</option>
                      <option value="5">+5</option>
                      <option value="4">+4</option>
                      <option value="3">+3</option>
                      <option value="2">+2</option>
                      <option value="1">+1</option>
                      <option value="0" selected="selected">
                        --
                      </option>
                      <option value="-1">-1</option>
                      <option value="-2">-2</option>
                      <option value="-3">-3</option>
                      <option value="-4">-4</option>
                      <option value="-5">-5</option>
                      <option value="-6">-6</option>
                    </select>
                  </td>
                  <td>
                    <span class="totalMod">---</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="info-group info-selectors">
            <div class="gen-specific g3 g4 g5 g6 g7 g8">
              <label for="natureL1">Nature</label>
              <select class="nature calc-trigger" id="natureL1">
                <option value="Adamant">Adamant (+Atk, -SpA)</option>
                <option value="Bashful">Bashful</option>
                <option value="Bold">Bold (+Def, -Atk)</option>
                <option value="Brave">Brave (+Atk, -Spe)</option>
                <option value="Calm">Calm (+SpD, -Atk)</option>
                <option value="Careful">Careful (+SpD, -SpA)</option>
                <option value="Docile">Docile</option>
                <option value="Gentle">Gentle (+SpD, -Def)</option>
                <option value="Hardy" selected="selected">
                  Hardy
                </option>
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
            <div class="gen-specific g3 g4 g5 g6 g7 g8">
              <label for="abilityL1">Ability</label>
              <select
                class="ability terrain-trigger calc-trigger"
                id="abilityL1"
              ></select>
              <input
                type="checkbox"
                title="Is this ability active?"
                class="abilityToggle calc-trigger"
              />
            </div>
            <div class="gen-specific g2 g3 g4 g5 g6 g7 g8">
              <label for="itemL1">Item</label>
              <select
                class="item terrain-trigger calc-trigger"
                id="itemL1"
              ></select>
            </div>
            <div>
              <label for="statusL1">Status</label>
              <select class="status calc-trigger" id="statusL1">
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
                class="toxic-counter calc-trigger hide"
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
          <div class="info-group">
            <label for="currentHpL1">Current HP</label>
            <input
              class="current-hp calc-trigger"
              id="currentHpL1"
              value="341"
            />
            /<span class="max-hp">341</span> (
            <input class="percent-hp calc-trigger" value="100" />
            %)
            <br />
            <br />
            Health <div class="hpbar"></div>
          </div>
          <div hidden id="criticalHitInstruction">
            Force this attack to be a critical hit?
          </div>
          <div hidden id="zMoveInstruction">
            Make this attack a Z-move?
          </div>
          <div class="move1">
            <select class="move-selector calc-trigger small-select"></select>
            <input class="move-bp calc-trigger" value="50" />
            <select class="move-type calc-trigger"></select>
            <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8">
              <option value="Physical">Physical</option>
              <option value="Special">Special</option>
            </select>
            <input
              aria-describedby="criticalHitInstruction"
              class="move-crit calc-trigger visually-hidden"
              type="checkbox"
              id="critL1"
            />
            <label
              class="btn crit-btn"
              for="critL1"
              title="Force this attack to be a critical hit?"
            >
              Crit
            </label>
            <input
              aria-describedby="zMoveInstruction"
              class="move-z calc-trigger visually-hidden"
              type="checkbox"
              id="zL1"
            />
            <label
              class="btn z-btn gen-specific g7"
              for="zL1"
              title="Make this attack a Z-move?"
            >
              Z
            </label>
            <select class="move-hits calc-trigger hide">
              <option value="2">2 hits</option>
              <option value="3">3 hits</option>
              <option value="4">4 hits</option>
              <option value="5">5 hits</option>
            </select>
            <select
              class="stat-drops calc-trigger hide"
              title="How many times was this move used in a row?"
            >
              ><option value="1">Once</option>
              <option value="2">Twice</option>
              <option value="3">3 times</option>
              <option value="4">4 times</option>
              <option value="5">5 times</option>
            </select>
            <select
              class="metronome calc-trigger hide"
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
          <div class="move2">
            <select class="move-selector calc-trigger small-select"></select>
            <input class="move-bp calc-trigger" value="0" />
            <select class="move-type calc-trigger"></select>
            <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8">
              <option value="Physical">Physical</option>
              <option value="Special">Special</option>
            </select>
            <input
              aria-describedby="criticalHitInstruction"
              class="move-crit calc-trigger visually-hidden"
              type="checkbox"
              id="critL2"
            />
            <label
              class="btn crit-btn"
              for="critL2"
              title="Force this attack to be a critical hit?"
            >
              Crit
            </label>
            <input
              aria-describedby="zMoveInstruction"
              class="move-z calc-trigger visually-hidden"
              type="checkbox"
              id="zL2"
            />
            <label
              class="btn z-btn gen-specific g7"
              for="zL2"
              title="Make this attack a Z-move?"
            >
              Z
            </label>
            <select class="move-hits calc-trigger hide">
              <option value="2">2 hits</option>
              <option value="3">3 hits</option>
              <option value="4">4 hits</option>
              <option value="5">5 hits</option>
            </select>
            <select
              class="stat-drops calc-trigger hide"
              title="How many times was this move used in a row?"
            >
              ><option value="1">Once</option>
              <option value="2">Twice</option>
              <option value="3">3 times</option>
              <option value="4">4 times</option>
              <option value="5">5 times</option>
            </select>
            <select
              class="metronome calc-trigger hide"
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
          <div class="move3">
            <select class="move-selector calc-trigger small-select"></select>
            <input class="move-bp calc-trigger" value="0" />
            <select class="move-type calc-trigger"></select>
            <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8">
              <option value="Physical">Physical</option>
              <option value="Special">Special</option>
            </select>
            <input
              aria-describedby="criticalHitInstruction"
              class="move-crit calc-trigger visually-hidden"
              type="checkbox"
              id="critL3"
            />
            <label
              class="btn crit-btn"
              for="critL3"
              title="Force this attack to be a critical hit?"
            >
              Crit
            </label>
            <input
              aria-describedby="zMoveInstruction"
              class="move-z calc-trigger visually-hidden"
              type="checkbox"
              id="zL3"
            />
            <label
              class="btn z-btn gen-specific g7"
              for="zL3"
              title="Make this attack a Z-move?"
            >
              Z
            </label>
            <select class="move-hits calc-trigger hide">
              <option value="2">2 hits</option>
              <option value="3">3 hits</option>
              <option value="4">4 hits</option>
              <option value="5">5 hits</option>
            </select>
            <select
              class="stat-drops calc-trigger hide"
              title="How many times was this move used in a row?"
            >
              ><option value="1">Once</option>
              <option value="2">Twice</option>
              <option value="3">3 times</option>
              <option value="4">4 times</option>
              <option value="5">5 times</option>
            </select>
            <select
              class="metronome calc-trigger hide"
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
          <div class="move4">
            <select class="move-selector calc-trigger small-select"></select>
            <input class="move-bp calc-trigger" value="0" />
            <select class="move-type calc-trigger"></select>
            <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8">
              <option value="Physical">Physical</option>
              <option value="Special">Special</option>
            </select>
            <input
              aria-describedby="criticalHitInstruction"
              class="move-crit calc-trigger visually-hidden"
              type="checkbox"
              id="critL4"
            />
            <label
              class="btn crit-btn"
              for="critL4"
              title="Force this attack to be a critical hit?"
            >
              Crit
            </label>
            <input
              aria-describedby="zMoveInstruction"
              class="move-z calc-trigger visually-hidden"
              type="checkbox"
              id="zL4"
            />
            <label
              class="btn z-btn gen-specific g7"
              for="zL4"
              title="Make this attack a Z-move?"
            >
              Z
            </label>
            <select class="move-hits calc-trigger hide">
              <option value="2">2 hits</option>
              <option value="3">3 hits</option>
              <option value="4">4 hits</option>
              <option value="5">5 hits</option>
            </select>
            <select
              class="stat-drops calc-trigger hide"
              title="How many times was this move used in a row?"
            >
              ><option value="1">Once</option>
              <option value="2">Twice</option>
              <option value="3">3 times</option>
              <option value="4">4 times</option>
              <option value="5">5 times</option>
            </select>
            <select
              class="metronome calc-trigger hide"
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
        </fieldset>
      </div>
    );
  }
}

export default PokemonInput;
