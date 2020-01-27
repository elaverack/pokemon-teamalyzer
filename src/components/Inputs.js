import React from "react";

import FieldInput from "./FieldInput";
import ImportExport from "./ImportExport";
import PokemonInput from "./PokemonInput";

const inputBlock = {
  float: "left",
  border: "1px solid"
};

class Inputs extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div style={inputBlock}>
        <ImportExport />
        <FieldInput />
        {/* TODO Level Input component? Think about where to put this */}
        <PokemonInput />
      </div>
    );
  }
}

export default Inputs;
