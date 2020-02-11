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

const statNames = ["HP", "Attack", "Defense", "SpAttack", "SpDefense", "Speed"];
let pokemon = {
  species: "",
  types: ["None", "None"],
  gender: "Genderless",
  weight: 10.0,
  baseVals: [100, 100, 100, 100, 100, 100],
  ivVals: [31, 31, 31, 31, 31, 31]
};

class InputPokemon extends React.Component {
  constructor() {
    super();
    this.state = pokemon;
  }

  handleChange(event) {
    const { name, value, id } = event.target;
    console.log(name, id, value);

    switch (name) {
      case "types":
        let types = this.state.types.slice();
        types[id] = value;
        this.setState({
          types: types
        });
        break;
      case "baseVal":
        let baseVals = this.state.baseVals.slice();
        baseVals[id] = value;
        this.setState({
          baseVals: baseVals
        });
        break;
      case "ivVal":
        let ivVals = this.state.ivVals.slice();
        ivVals[id] = value;
        this.setState({
          ivVals: ivVals
        });
        break;
      default:
        this.setState({
          name: value
        });
    }
  }

  render() {
    //Loop render stat input components
    const statInputs = [];
    for (const [i] of statNames.entries()) {
      statInputs.push(
        <InputStat
          title={statNames[i]}
          key={statNames[i]}
          baseVal={this.state.baseVals[i]}
          ivVal={this.state.ivVals[i]}
          handleChange={event => this.handleChange(event)}
          index={i}
        />
      );
    }

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
          <Weight weight={this.state.weight} />
          {statInputs}
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
