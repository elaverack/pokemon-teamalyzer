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
  types: ["None", "None"],
  gender: "Genderless"
};

class InputPokemon extends React.Component {
  constructor() {
    super();
    this.state = pokemon;
  }

  handleChange(event) {
    //console.log(...arguments);
    console.log(event.target.name);
    console.log(event.target.id);
    const { name, value, id } = event.target;
    let types = this.state.types.slice(); //creates the clone of the state

    if (name === "types") {
      types[id] = value;
      this.setState({
        types: types
      });
    } else {
      this.setState({
        [name]: value
      });
    }
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

          <InputType
            types={this.state.types}
            handleChange={event => this.handleChange(event)}
          />
          <InputGender gender={this.state.gender} />
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
          <h1>
            {this.state.species}
            <br />
            {this.state.types[0]} {this.state.types[1]}
            <br />
          </h1>
        </fieldset>
      </div>
    );
  }
}

export default InputPokemon;
