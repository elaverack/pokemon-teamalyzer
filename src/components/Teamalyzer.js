import React from "react";

import FieldInput from "./FieldInput";
import ImportExport from "./ImportExport";
import PokemonInput from "./PokemonInput";
import Tools from "./Tools";

const inputBlock = {
  float: "left",
  border: "1px solid"
};

class Teamalyzer extends React.Component {
  render() {
    return (
      <div>
        <div style={inputBlock}>
          <ImportExport />
          <FieldInput />
          <PokemonInput />
        </div>
        <Tools />
      </div>
    );
  }
}

export default Teamalyzer;
