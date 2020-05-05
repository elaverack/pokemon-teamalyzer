import React from 'react';
import InputField from './InputField';
import ImportExport from './ImportExport';
import InputPokemon from './InputPokemon';
import InputLevel from './InputLevel';
import { observer } from 'mobx-react';

const inputBlock = {
  float: 'left',
  border: '1px solid',
};

@observer
class Inputs extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    const inputPokemon = this.props.teamState.team.map((pokemon, idx) => (
      <InputPokemon pokeState={pokemon} index={idx} />
    ));

    return (
      <div style={inputBlock}>
        <ImportExport />
        <InputLevel teamState={this.props.teamState} />
        <InputField fieldState={this.props.teamState.field} />
        {inputPokemon}
      </div>
    );
  }
}

export default Inputs;
