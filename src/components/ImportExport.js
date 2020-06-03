import React from 'react';
import { Pokemon } from '@smogon/calc';
import { Sets } from '@pkmn/sets';
import { observer } from '../../node_modules/mobx-react/dist/index';
import { validSpecies, gen } from '../utils';

/* TODO
create functions needed to convert showdown export into pokemon class
update the team state using the inputted pokemon
don't store sets like in the damage calc? do users want to rapidly switch between potential sets/spreads?
what happens when someone inputs less than 6 pokemon, who gets replaced? probably last pokemon gets replaced
user selects which pokemon to replace?
*/

@observer
class ImportExport extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
  }

  testImport(text) {
    let inputTeam = `Plakia (Dracovish) @ Choice Band
      Ability: Strong Jaw
      Level: 50
      EVs: 4 HP / 252 Atk / 252 Spe
      Adamant Nature
      - Ice Fang
      - Fishious Rend
      - Earthquake
      - Leech Life

      Whimsicott @ Focus Sash
      Ability: Prankster
      Level: 50
      EVs: 252 HP / 4 SpD / 252 Spe
      Timid Nature
      - Energy Ball
      - Tailwind
      - Beat Up
      - Moonblast

      Lucario @ Shuca Berry
      Ability: Justified
      Level: 50
      EVs: 4 HP / 252 Atk / 252 Spe
      Jolly Nature
      - Protect
      - Close Combat
      - Meteor Mash
      - Bullet Punch

      Grimmsnarl (M) @ Light Clay
      Ability: Prankster
      Level: 50
      EVs: 252 HP / 4 Def / 252 SpD
      Careful Nature
      - Reflect
      - Light Screen
      - Thunder Wave
      - Play Rough
    `;

    let pokeArray = text.split('\n\n', 6).map(pokeImport => Sets.importSet(pokeImport));
    console.log(pokeArray);
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
    //TODO finish move importing to act like species import
    pokeState.moves.map((move, index) => (move.name = pokeObject.moves[index]));
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
              this.testImport(this.state.text);
              this.setState({ text: '' });
            }}>
            Import
          </button>
          {/* <button style={{ position: 'static', bottom: 0 }}>Export</button> */}
        </fieldset>
      </div>
    );
  }
}

export default ImportExport;
