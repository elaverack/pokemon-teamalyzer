import React from "react";

import InputField from "./InputField";
import ImportExport from "./ImportExport";
import InputPokemon from "./InputPokemon";
import InputLevel from "./InputLevel";

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
        <InputLevel />
        <InputField />

        <InputPokemon />
      </div>
    );
  }
}

export default Inputs;
