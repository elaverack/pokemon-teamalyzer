import React from 'react';
import { TYPE_CHART, Pokemon, calculate, Move, Field } from '@smogon/calc';
import { gen, validSpecies } from '../../utils';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import DefensiveTable from './DefensiveTable';

@observer
class DefensiveTableTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.genData(), columns: this.genColumns() };
  }

  //TODO add toggle between physical and special damage
  calcDamage(type, poke, fieldState) {
    if (poke.include && validSpecies(poke.species)) {
      const defender = new Pokemon(gen, poke.species, {
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

      const attacker = new Pokemon(gen, 'Ditto', {
        level: +this.props.teamState.level,
        nature: 'Serious',
        //NOTE conditional stops STAB effect on damage results
        overrides: { types: type === '???' ? 'Normal' : '???' },
      });

      const attack = new Move(gen, 'Explosion', { overrides: { type: type } });

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

      let result = calculate(gen, attacker, defender, attack, field);

      //NOTE damage returned is maximum roll
      return Math.round((result.range()[1] / defender.maxHP()) * 1000);
    } else {
      return 0;
    }
  }

  avgTypeDamage(atkType) {
    let dmgArray = this.props.teamState.team.map((poke, index) =>
      this.calcDamage(atkType, poke, this.props.teamState.field)
    );
    let dmgTotal = dmgArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    let activePoke = this.props.teamState.team.map(poke => {
      return poke.include && validSpecies(poke.species);
    });
    let totalActive = activePoke.reduce((accumulator, currentValue) => accumulator + currentValue);
    totalActive = totalActive == 0 ? 1 : totalActive;
    return Math.round(dmgTotal / totalActive);
  }

  //TODO add row where average damage taken by each pokemon across all types is calculated
  genData() {
    let damageData = Object.keys(TYPE_CHART[gen]).map(atkType => {
      let row = { rowTitle: atkType };
      this.props.teamState.team.map((poke, index) =>
        Object.defineProperty(row, String(index), {
          value: this.calcDamage(atkType, poke, this.props.teamState.field),
        })
      );
      Object.defineProperty(row, 'AvgTypeDmg', {
        value: this.avgTypeDamage(atkType),
      });
      return row;
    });

    return damageData;
  }

  genColumns() {
    let teamCols = this.props.teamState.team.map((pokemon, index) => ({
      Header: pokemon.species,
      accessor: String(index),
    }));
    teamCols.unshift({ Header: 'Attack Type', accessor: 'rowTitle' });
    teamCols.push({ Header: 'Average Type Damage', accessor: 'AvgTypeDmg' });
    return teamCols;
  }

  updateData() {
    this.setState({ data: this.genData(), columns: this.genColumns() });
  }

  render() {
    return (
      <div>
        <label>Defense Analyzer</label>
        <br />
        <input type="button" onClick={() => this.updateData()} value="ANALYZE" />
        <DefensiveTable columns={this.state.columns} data={this.state.data} />
      </div>
    );
  }
}

export default observer(DefensiveTableTool);
