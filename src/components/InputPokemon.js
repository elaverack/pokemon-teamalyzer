/////// IMPORTS /////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { observer } from "mobx-react";
import { statNames } from "../utils";
import InputStat from "./InputStat";
import InputMove from "./InputMove";
import InputSpecies from "./InputSpecies";
import InputType from "./InputType";
import InputGender from "./InputGender";
import Weight from "./Weight";
import InputNature from "./InputNature";
import InputAbility from "./InputAbility";
import InputItem from "./InputItem";
import InputStatus from "./InputStatus";
//import InputHP from "./InputHP";

//////////// COMPONENT DEFINITION ////////////////////////////////////////////////////////////

const InputPokemon = observer(
  class InputPokemon extends React.Component {
    render() {
      //Map render stat input components
      const statInputs = statNames.map((statNames, idx) => (
        <InputStat
          title={statNames}
          key={statNames}
          pokeState={this.props.pokeState}
          index={idx}
        />
      ));

      //Map render move input components
      const moveInputs = this.props.pokeState.moves.map((move, idx) => (
        <InputMove key={idx} index={idx} moveState={move} />
      ));

      return (
        <div>
          <fieldset>
            <legend align="center">
              Pok&eacute;mon {this.props.index + 1}
            </legend>
            <InputSpecies pokeState={this.props.pokeState} />
            <InputType pokeState={this.props.pokeState} />
            <InputGender pokeState={this.props.pokeState} />
            <Weight pokeState={this.props.pokeState} />
            {statInputs}
            <InputNature pokeState={this.props.pokeState} />
            <InputAbility pokeState={this.props.pokeState} />
            <InputItem pokeState={this.props.pokeState} />
            <InputStatus pokeState={this.props.pokeState} />
            {moveInputs}
          </fieldset>
        </div>
      );
    }
  }
);

export default InputPokemon;
