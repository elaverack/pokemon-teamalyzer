import React from "react";

import InputField from "./InputField";
import ImportExport from "./ImportExport";
import InputPokemon from "./InputPokemon";
import InputLevel from "./InputLevel";
import { teamState } from "../store";

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
        <input type="button" value="Analyze Team" onClick={this.onSubmit} />
        <InputLevel />
        <InputField />

        <InputPokemon pokeState={teamState.team[0]} />
      </div>
    );
  }
}

export default Inputs;
