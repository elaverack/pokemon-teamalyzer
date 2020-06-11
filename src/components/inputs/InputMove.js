import React from 'react';
import { observer } from 'mobx-react';
import { calculate, Move, Pokemon, Field } from '@smogon/calc';
import { genTypeOptions, genMoveOptions, validMove, validSpecies, gen, handleRange } from '../../utils';

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

  moveStdDamage(poke, move, fieldState, level) {
    if (poke.include && move.include && validSpecies(poke.species) && validMove(move.name)) {
      const attacker = new Pokemon(gen, poke.species, {
        level: +level,
        item: poke.item,
        nature: poke.nature,
        gender: poke.gender,
        isDynamaxed: poke.isMax,
        ability: poke.ability,
        abilityOn: poke.abilityOn,
        status: poke.status,
        ivs: {
          hp: +poke.ivVals[0],
          atk: +poke.ivVals[1],
          def: +poke.ivVals[2],
          spa: +poke.ivVals[3],
          spd: +poke.ivVals[4],
          spe: +poke.ivVals[5],
        },
        evs: {
          hp: +poke.evVals[0],
          atk: +poke.evVals[1],
          def: +poke.evVals[2],
          spa: +poke.evVals[3],
          spd: +poke.evVals[4],
          spe: +poke.evVals[5],
        },
        boosts: {
          atk: +poke.boosts[1],
          def: +poke.boosts[2],
          spa: +poke.boosts[3],
          spd: +poke.boosts[4],
          spe: +poke.boosts[5],
        },
        overrides: { types: poke.types },
      });

      const defender = new Pokemon(gen, 'Ditto', {
        level: +level,
        nature: 'Serious',
        overrides: { types: ['???', '???'] },
      });

      let attack = new Move(gen, move.name, {
        useMax: poke.isMax, //NOTE Max Flare broken as of calc 0.3.0
        isCrit: move.crit,
        overrides: { basePower: +move.bp },
      });

      let aSide = fieldState.sides[0];
      let dSide = fieldState.sides[1];
      const field = new Field({
        gameType: fieldState.format,
        weather: fieldState.weather,
        terrain: fieldState.terrain,
        isGravity: fieldState.gravity,
        defenderSide: {
          spikes: dSide.spikes,
          steelsurge: dSide.steelsurge,
          isSR: dSide.stealthrock,
          isReflect: dSide.reflect,
          isLightScreen: dSide.lightscreen,
          isProtected: dSide.protect,
          isSeeded: dSide.leechseed,
          isForesight: dSide.foresight,
          isTailwind: dSide.tailwind,
          isHelpingHand: dSide.helpinghand,
          isFriendGuard: dSide.friendguard,
          isAuroraVeil: dSide.auroraveil,
          isBattery: dSide.battery,
          isSwitching: dSide.switching,
        },
        attackerSide: {
          spikes: aSide.spikes,
          steelsurge: aSide.steelsurge,
          isSR: aSide.stealthrock,
          isReflect: aSide.reflect,
          isLightScreen: aSide.lightscreen,
          isProtected: aSide.protect,
          isSeeded: aSide.leechseed,
          isForesight: aSide.foresight,
          isTailwind: aSide.tailwind,
          isHelpingHand: aSide.helpinghand,
          isFriendGuard: aSide.friendguard,
          isAuroraVeil: aSide.auroraveil,
          isBattery: aSide.battery,
          isSwitching: aSide.switching,
        },
      });

      let result = calculate(gen, attacker, defender, attack, field);
      //NOTE damage returned is maximum roll
      return result.range()[1];
    } else {
      return 0;
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
                  console.log('typechange');
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
            <td>
              <label>Power: </label>
              <output>
                {this.moveStdDamage(
                  this.props.pokeState,
                  this.props.moveState,
                  this.props.fieldState,
                  this.props.level
                )}
              </output>
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
