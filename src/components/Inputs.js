import React from "react";

import InputField from "./InputField";
import ImportExport from "./ImportExport";
import InputPokemon from "./InputPokemon";

const inputBlock = {
  float: "left",
  border: "1px solid",
};

class Inputs extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div style={inputBlock}>
        <ImportExport />
        <InputField />
        {/* TODO Level Input component? Think about where to put this */}
        <InputPokemon />
      </div>
    );
  }
}

export default Inputs;
