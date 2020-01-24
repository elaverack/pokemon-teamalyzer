import React from "react";
import { Pokemon } from "@smogon/calc";

import FieldInput from "./FieldInput";
import ImportExport from "./ImportExport";
import PokemonInput from "./PokemonInput";
import Tools from "./Tools";

const inputBlock = {
  float: "left",
  border: "1px solid"
};

// TODO, might be a cleaner way to do this?
const TeamSlot = new Pokemon(8, "Ditto");
const PokeArr = [TeamSlot, TeamSlot, TeamSlot, TeamSlot, TeamSlot, TeamSlot];

class Teamalyzer extends React.Component {
  constructor() {
    super();
    this.state = {
      team: PokeArr
    };
  }

  render() {
    return (
      <div>
        <div style={inputBlock}>
          <ImportExport />
          <FieldInput />
          {/* TODO Level Input component? Think about where to put this */}
          <PokemonInput />
        </div>
        <Tools team={this.state.team} />
      </div>
    );
  }
}

export default Teamalyzer;
