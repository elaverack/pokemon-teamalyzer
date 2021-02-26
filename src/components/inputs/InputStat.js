import React from 'react';
import { observer } from 'mobx-react';
import { Pokemon, Move, calculate, Field } from '@smogon/calc';
import { handleRange, validSpecies, gen } from '../../utils';
import { teamState } from '../../store';

@observer
class InputStat extends React.Component {
  onBaseChange(event) {
    let input = handleRange(event);
    this.props.pokeState.baseVals[this.props.index] = input;
  }
  onIvChange(event) {
    let input = handleRange(event);
    this.props.pokeState.ivVals[this.props.index] = input;
  }
  onEvChange(event) {
    let input = handleRange(event);
    this.props.pokeState.evVals[this.props.index] = input;
  }
  onBoostChange(event) {
    this.props.pokeState.boosts[this.props.index] = event.target.value;
  }

  getStat(index) {
    const state = this.props.pokeState;
    let species = state.species;
    if (!validSpecies(state.species)) {
      species = 'Ditto';
    }
    let currPokemon = new Pokemon(gen, species, {
      level: +teamState.level,
      nature: state.nature,
      isDynamaxed: state.isMax,
      ivs: {
        hp: +state.ivVals[0],
        atk: +state.ivVals[1],
        def: +state.ivVals[2],
        spa: +state.ivVals[3],
        spd: +state.ivVals[4],
        spe: +state.ivVals[5],
      },
      evs: {
        hp: +state.evVals[0],
        atk: +state.evVals[1],
        def: +state.evVals[2],
        spa: +state.evVals[3],
        spd: +state.evVals[4],
        spe: +state.evVals[5],
      },
    });
    if (index === 0) {
      return currPokemon.maxHP();
    } else {
      let statOut = [...Object.values(currPokemon.rawStats)];
      return statOut[index];
    }
  }

  stdDamage(category) {
    const poke = this.props.pokeState;
    const level = this.props.level;
    const fieldState = this.props.fieldState;
    if (poke.include && validSpecies(poke.species)) {
      const defender = new Pokemon(gen, poke.species, {
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

      const attacker = new Pokemon(gen, 'Ditto', {
        level: 50,
        nature: 'Serious',
        overrides: { types: ['???', '???'] },
      });

      let explosion = new Move(gen, 'Explosion', {
        overrides: { category: category, type: '???' },
      });

      let aSide = fieldState.sides[1];
      let dSide = fieldState.sides[0];
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

      let result = calculate(gen, attacker, defender, explosion, field);
      //NOTE damage returned is maximum roll
      return result.range()[1];
    } else {
      return 0;
    }
  }

  //NOTE explanation for bulk calc described in Info page
  //TODO create page or readme to explain "bulk" stat
  //how do i incorporate abilities and items? use typeless phys/special attack and back out result
  getStandardBulk(statName) {
    /*
    if (statName == 'Defense' || statName == 'Sp-Defense') {
      let hp = this.getStat(0);
      let def = this.getStat(this.props.index);
      let boostStage = +this.props.pokeState.boosts[this.props.index];
      let boostMultiplier = boostStage >= 0 ? (2 + boostStage) / 2 : 2 / (2 - boostStage);
      def = def * boostMultiplier;
      let dittoDef = 68;

      return Math.round((def * (hp - 2)) / dittoDef + 2);
    }
    */
    //calculate standard power of typeless ditto explosion
    const stdPower = 84;
    //calc damage of typeless ditto explosion into current pokemon
    let damage = 1;
    if (statName == 'Defense') {
      damage = this.stdDamage('Physical');
    } else {
      damage = this.stdDamage('Special');
    }
    let maxhp = this.getStat(0);
    let bulk = (stdPower * maxhp) / damage;
    return bulk;
  }

  maxEvWarning() {
    let total = this.props.pokeState.evVals.reduce((a, b) => +a + +b);
    return total == 508 ? '  MAX' : total > 508 ? '  !!!' : '';
  }

  render() {
    return (
      <table>
        <thead>
          <tr hidden={this.props.title !== 'HP' && 'hidden'}>
            <th />
            <th>Base</th>
            <th>IV</th>
            <th>EV{this.maxEvWarning()}</th>
            <th>Stat</th>
            <th>Boost</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>
              <label>{this.props.title}: </label>
            </th>
            <td>{this.props.pokeState.baseVals[this.props.index]}</td>
            <td>
              <input
                value={this.props.pokeState.ivVals[this.props.index]}
                type="number"
                min="0"
                max="31"
                step="1"
                onChange={event => {
                  this.onIvChange(event);
                }}
              />
            </td>
            <td>
              <input
                value={this.props.pokeState.evVals[this.props.index]}
                type="number"
                min="0"
                max="252"
                step="4"
                onChange={event => {
                  this.onEvChange(event);
                }}
              />
            </td>
            <td>
              <output>{this.getStat(this.props.index)}</output>
            </td>
            <td hidden={this.props.title === 'HP'}>
              <select
                value={this.props.pokeState.boosts[this.props.index]}
                onChange={event => {
                  this.onBoostChange(event);
                }}>
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
            <td hidden={this.props.title != 'Defense' && this.props.title != 'Sp-Defense'}>
              <label>Bulk: </label>
              <output>{this.getStandardBulk(this.props.title)}</output>
            </td>
          </tr>
        </thead>
      </table>
    );
  }
}

export default InputStat;

/* OPTIONAL make base stat value editable
                <input
                  className="base"
                  name="baseVal"
                  type="number"
                  min="1"
                  max="255"
                  step="1"
                  value={this.props.pokeState.baseVals[this.props.index]}
                  onChange={(event) => {
                    this.onBaseChange(event);
                  }}
                />

OPTIONAL calculate modded stat totals
              <td hidden={this.props.title === "HP" && "hidden"}>
                <span></span>
              </td>
*/
