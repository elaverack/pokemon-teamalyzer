import React from 'react';
import { observer } from 'mobx-react';
import { Pokemon } from '@smogon/calc';
import { genSpeciesOptions, validSpecies, gen } from '../../utils';

@observer
class InputSpecies extends React.Component {
  onSpeciesChange(event) {
    this.props.pokeState.species = event.target.value;
    if (validSpecies(this.props.pokeState.species)) {
      let currPokemon = new Pokemon(gen, event.target.value);
      this.props.pokeState.types = [currPokemon.types[0], currPokemon.types[1] || '???'];
      this.props.pokeState.gender = currPokemon.gender;
      this.props.pokeState.weight = currPokemon.weightkg;
      this.props.pokeState.baseVals = [...Object.values(currPokemon.species.baseStats)];
      this.props.pokeState.ability = currPokemon.ability;
    }
  }

  onDynamaxChange() {
    this.props.pokeState.isMax = !this.props.pokeState.isMax;
  }

  render() {
    return (
      <div>
        {/* TODO decide if include toggle label is necessary */}
        {/* <label>Include?</label> */}
        <input
          title="Should this Pokemon be included in the analysis?"
          type="checkbox"
          checked={this.props.pokeState.include}
          onChange={() => {
            this.props.pokeState.include = !this.props.pokeState.include;
          }}
        />
        <input
          type="text"
          list="speciesOptions"
          placeholder="(Ditto)"
          value={this.props.pokeState.species}
          onChange={event => {
            this.onSpeciesChange(event);
          }}
        />
        <datalist id="speciesOptions">{genSpeciesOptions()}</datalist>
        <button
          type="button"
          title="Dynamax this Pokemon?"
          onClick={() => {
            this.onDynamaxChange();
          }}>
          Dynamax
        </button>
      </div>
    );
  }
}

export default InputSpecies;

/* OPTIONAL make dropdown to flip formes of pokemon without changing overall species
        <div className="hide">
          <label>Forme</label>
          <select className="forme"></select>
        </div> */
