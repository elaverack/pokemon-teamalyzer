import React from 'react';
import { observer } from 'mobx-react';
import { Pokemon } from '@smogon/calc';
import { handleRange, validSpecies, gen } from '../utils';
import { teamState } from '../store';

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

  render() {
    return (
      <table>
        <thead>
          <tr hidden={this.props.title !== 'HP' && 'hidden'}>
            <th />
            <th className="col">Base</th>
            <th className="col">IV</th>
            <th className="col">EV</th>
            <th className="col">Stat</th>
            <th className="col">Boost</th>
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
            <td hidden={this.props.title === 'HP' && 'hidden'}>
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
