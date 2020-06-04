import React from 'react';
import { Pokemon, Move } from '@smogon/calc';
import { Sets } from '@pkmn/sets';
import { observer } from '../../node_modules/mobx-react/dist/index';
import { validSpecies, gen, validMove } from '../utils';
import { initialTeamState } from '../store';

@observer
class ImportExport extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
  }

  mainImport(text) {
    let pokeArray = text.split('\n\n', 6).map(pokeImport => Sets.importSet(pokeImport));
    pokeArray.map((pokeObject, index) => {
      this.importPoke(pokeObject, index);
    });
  }

  importPoke(pokeObject, index) {
    let pokeState = this.props.teamState.team[index];
    this.onSpeciesImport(pokeObject.species, pokeState);
    pokeState.gender = pokeObject.gender == 'M' ? 'Male' : pokeObject.gender == 'F' ? 'Female' : 'Genderless';
    pokeState.nature = pokeObject.nature;
    if (!!pokeObject?.evs) {
      pokeState.evVals = Object.values(pokeObject.evs);
    }
    if (!!pokeObject?.ivs) {
      pokeState.ivVals = Object.values(pokeObject.ivs);
    }
    pokeState.ability = pokeObject.ability;
    if (!!pokeObject?.item) {
      pokeState.item = pokeObject.item;
    }
    pokeState.moves.map((moveState, index) => this.onMoveImport(moveState, pokeObject.moves[index]));
  }

  onSpeciesImport(species, pokeState) {
    if (validSpecies(species)) {
      let currPokemon = new Pokemon(gen, species);
      pokeState.species = species;
      pokeState.types = [currPokemon.types[0], currPokemon.types[1] || '???'];
      pokeState.weight = currPokemon.weightkg;
      pokeState.baseVals = [...Object.values(currPokemon.species.baseStats)];
    }
  }

  onMoveImport(moveState, importMove) {
    if (validMove(importMove)) {
      let { type, bp, category, hits, name } = new Move(gen, importMove);
      moveState.name = name;
      moveState.type = type;
      moveState.bp = bp;
      moveState.category = category;
      moveState.hits = hits;
    }
  }

  render() {
    return (
      <div style={{ border: '1px solid' }}>
        <fieldset>
          <legend>Import</legend>
          <form>
            <textarea
              value={this.state.text}
              onChange={event => this.setState({ text: event.target.value })}></textarea>
          </form>
          <button
            style={{ position: 'static', bottom: 0 }}
            onClick={() => {
              this.props.teamState.team = initialTeamState.team;
              this.mainImport(this.state.text);
              this.setState({ text: '' });
            }}>
            Import
          </button>
          {/* OPTIONAL add export feature */}
          {/* <button style={{ position: 'static', bottom: 0 }}>Export</button> */}
        </fieldset>
      </div>
    );
  }
}

export default ImportExport;
