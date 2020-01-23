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

class Teamalyzer extends React.Component {
  /*
Use pokemon object as part of state? yes, can do, can access all parts of pokemon class from prop
create array of pokemon as part of state?
*/

  constructor() {
    super();
    this.state = {
      level: 50,
      pokemon1: new Pokemon(8, "Ditto")
    };
  }

  render() {
    return (
      <div>
        <div style={inputBlock}>
          <ImportExport />
          <FieldInput />
          <PokemonInput />
        </div>
        <Tools input={this.state} />
      </div>
    );
  }
}

export default Teamalyzer;
