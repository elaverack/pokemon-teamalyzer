import React from 'react';
import InputField from './inputs/InputField';
import ImportExport from './ImportExport';
import InputPokemon from './inputs/InputPokemon';
import InputLevel from './inputs/InputLevel';
import { observer } from '../../node_modules/mobx-react/dist/index';

const inputBlock = {
  float: 'left',
  border: '1px solid',
};

const enemyBlock = {
  float: 'right',
  border: '1px solid',
};

@observer
class Inputs extends React.Component {
  render() {
    const inputPokemon = this.props.teamState.team.map((pokemon, idx) => (
      <InputPokemon
        pokeState={pokemon}
        index={idx}
        key={idx}
        fieldState={this.props.teamState.field}
        level={this.props.teamState.level}
      />
    ));

    const enemyPokemon = this.props.enemyTeamState.team.map((pokemon, idx) => (
      <InputPokemon
        pokeState={pokemon}
        index={idx}
        key={idx}
        fieldState={this.props.teamState.field}
        level={this.props.teamState.level}
      />
    ));

    return (
      <div>
        <ImportExport teamState={this.props.teamState} />
        <InputLevel teamState={this.props.teamState} />
        <InputField fieldState={this.props.teamState.field} />
        <div style={inputBlock}>{inputPokemon}</div>
        <div style={enemyBlock}>{enemyPokemon}</div>
      </div>
    );
  }
}

export default Inputs;
