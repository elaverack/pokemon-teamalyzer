import React from 'react';
import { TYPE_CHART, Pokemon, calculate, Move, Field, Side } from '@smogon/calc';
import { gen, validSpecies, validMove } from '../../utils';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import 'mobx-react-lite/batchingForReactDom';
import OffensiveTable from './OffensiveTable';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 1px;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

@observer
class OffensiveTableTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.genData(this.category), columns: this.genColumns(), category: 'Both', maxDamage: 100 };
  }

  calcDamage(type1, type2, poke, move, fieldState, category) {
    if (
      poke.include &&
      move.include &&
      validSpecies(poke.species) &&
      validMove(move.name) &&
      (move.category == category || category == 'Both')
    ) {
      const attacker = new Pokemon(gen, poke.species, {
        level: +this.props.teamState.level,
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
      });

      const defender = new Pokemon(gen, 'Ditto', {
        level: +this.props.teamState.level,
        nature: 'Serious',
        overrides: { types: [type1, type1 === type2 ? '???' : type2] },
      });

      let attack = new Move(gen, move.name, {
        useMax: poke.isMax,
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

  genData(category) {
    //generate each row of data, first entry is the row title, rest of the entries are data generated by the calc function
    let damageData = Object.keys(TYPE_CHART[gen]).map(type2 => {
      let row = { rowTitle: type2 };
      Object.keys(TYPE_CHART[gen]).map(
        type1 =>
          (row[type1] = this.props.teamState.team
            .map(pokemon =>
              pokemon.moves
                .map(move => this.calcDamage(type1, type2, pokemon, move, this.props.teamState.field, category))
                .reduce((accumulator, currentValue) => accumulator + currentValue)
            )
            .reduce((accumulator, currentValue) => accumulator + currentValue))
      );
      return row;
    });
    this.setMaxDamage(damageData);
    return damageData;
  }

  setMaxDamage(damageData) {
    let max = Math.max(
      ...damageData.map(row => Math.max(...Object.values(row).filter(element => typeof element != 'string')))
    );
    this.setState({ maxDamage: max });
  }

  genColumns() {
    let typeCols = Object.keys(TYPE_CHART[gen]).map((type, index) => ({ Header: type, accessor: type }));
    typeCols.unshift({ Header: '', accessor: 'rowTitle' });
    return typeCols;
  }

  updateData(category) {
    this.setState({
      data: this.genData(category),
      columns: this.genColumns(),
    });
  }

  render() {
    return (
      <div>
        <label>Offense Analyzer</label>
        <div title="Select offense category.">
          <label>
            <input
              type="radio"
              value="Physical"
              checked={this.state.category === 'Physical'}
              onChange={event => {
                this.setState({ category: event.target.value });
                this.updateData(event.target.value);
              }}
            />
            Physical
          </label>
          <label>
            <input
              type="radio"
              value="Special"
              checked={this.state.category === 'Special'}
              onChange={event => {
                this.setState({ category: event.target.value });
                this.updateData(event.target.value);
              }}
            />
            Special
          </label>
          <label>
            <input
              type="radio"
              value="Both"
              checked={this.state.category === 'Both'}
              onChange={event => {
                this.setState({ category: event.target.value });
                this.updateData(event.target.value);
              }}
            />
            Overall
          </label>
        </div>
        <input type="button" onClick={() => this.updateData(this.state.category)} value="ANALYZE" />
        <Styles>
          <OffensiveTable
            columns={this.state.columns}
            data={this.state.data}
            getCellProps={cellInfo => ({
              style: {
                backgroundColor: `hsl(${(cellInfo.value / (this.state.maxDamage + 0.1)) * 205}, 100%, 50%)`,
              },
            })}
          />
        </Styles>
      </div>
    );
  }
}

export default observer(OffensiveTableTool);
