import React from 'react';
import { Sets } from '@pkmn/sets';
import { observer } from '../../node_modules/mobx-react/dist/index';

/* TODO
create functions needed to convert showdown export into pokemon class
update the team state using the inputted pokemon
don't store sets like in the damage calc? do users want to rapidly switch between potential sets/spreads?
what happens when someone inputs less than 6 pokemon, who gets replaced? probably last pokemon gets replaced
user selects which pokemon to replace?
*/

@observer
class ImportExport extends React.Component {
  testImport() {
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

    return inputTeam.split('\n\n', 6).map(pokeImport => Sets.importSet(pokeImport));
  }

  render() {
    console.log(this.testImport());
    return (
      <div style={{ border: '1px solid' }}>
        <fieldset>
          <legend>Import / Export</legend>
          <form>
            <textarea></textarea>
          </form>
          <button style={{ position: 'static', bottom: 0 }}>Import</button>
          {/* <button style={{ position: 'static', bottom: 0 }}>Export</button> */}
        </fieldset>
      </div>
    );
  }
}

export default ImportExport;
