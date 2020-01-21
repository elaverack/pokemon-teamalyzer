import React from "react";

import FieldInput from "./FieldInput";
import ImportExport from "./ImportExport";
import PokemonInput from "./PokemonInput";
import Tools from "./Tools";

class Teamalyzer extends React.Component {
  render() {
    return (
      <div>
        <ImportExport />
        <FieldInput />
        <PokemonInput />
        <Tools />
      </div>
    );
  }
}

export default Teamalyzer;
