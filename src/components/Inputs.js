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

@observer
class Inputs extends React.Component {
  render() {
    const inputPokemon = this.props.teamState.team.map((pokemon, idx) => (
      <InputPokemon pokeState={pokemon} index={idx} key={idx} />
    ));

    return (
      <div style={inputBlock}>
        <ImportExport teamState={this.props.teamState} />
        <InputLevel teamState={this.props.teamState} />
        <InputField fieldState={this.props.teamState.field} />
        {inputPokemon}
      </div>
    );
  }
}

export default Inputs;
