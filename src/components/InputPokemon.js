import React from "react";
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
import InputHP from "./InputHP";
/* TODO
update state using the pokemon class from the calc to fill in blanks
make this component repeatable for 6 pokemon
*/

const stats = ["HP", "Attack", "Defense", "SpAttack", "SpDefense", "Speed"];
let pokemon = {
  species: "",
  type: "Dragon"
};

class InputPokemon extends React.Component {
  constructor() {
    super();
    this.state = pokemon;
  }

  handleChange(event) {
    //console.log(...arguments);
    //console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div aria-label="Pok&eacute;mon 1" className="panel" role="region">
        <fieldset className="poke-info" id="p1">
          <legend align="center">Pok&eacute;mon 1</legend>
          <InputSpecies
            species={this.state.species}
            handleChange={event => this.handleChange(event)}
          />
          <h1>
            {this.state.species}
            {this.state.type}
          </h1>
          <InputType />
          <InputGender />
          <Weight />
          {/* TODO loop render stats */}
          <InputStat title={stats[0]} />
          <InputStat title={stats[1]} />
          <InputNature />
          <InputAbility />
          <InputItem />
          <InputStatus />
          <InputHP />
          {/* TODO loop render moves */}
          <InputMove />
        </fieldset>
      </div>
    );
  }
}

export default InputPokemon;
