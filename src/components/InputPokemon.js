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
use the pokemon class from the calc to fill in blanks
make this component repeatable for 6 pokemon
*/
import { Pokemon } from "@smogon/calc";
var reference = new Pokemon(8, "Gengar");
console.log(reference);

const statNames = [
  "HP",
  "Attack",
  "Defense",
  "Sp-Attack",
  "Sp-Defense",
  "Speed"
];

let pokemon = {
  species: "",
  types: ["None", "None"],
  gender: "Genderless",
  //TODO remove weight from state
  weight: 10.0,
  baseVals: ["100", "100", "100", "100", "100", "100"],
  ivVals: ["31", "31", "31", "31", "31", "31"],
  evVals: ["0", "0", "0", "0", "0", "0"],
  boosts: ["0", "0", "0", "0", "0", "0"],
  nature: "Serious",
  ability: "",
  abilityOn: true,
  item: "",
  status: "",
  curHP: "341"
};

class InputPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = pokemon;
  }

  handleRange(event) {
    const input = event.target;
    if (input.value < parseInt(input.min, 10)) {
      input.value = input.min;
      this.handleChange(event);
    } else if (input.value > parseInt(input.max, 10)) {
      input.value = input.max;
      this.handleChange(event);
    } else {
      this.handleChange(event);
    }
  }

  handleChange(event) {
    const { name, value, id } = event.target;
    console.log(name, id, value);

    switch (name) {
      case "types":
        let types = [...this.state.types];
        types[id] = value;
        this.setState({
          types: types
        });
        break;
      case "baseVal":
        let baseVals = [...this.state.baseVals];
        baseVals[id] = value;
        this.setState({
          baseVals: baseVals
        });
        break;
      case "ivVal":
        let ivVals = [...this.state.ivVals];
        ivVals[id] = value;
        this.setState({
          ivVals: ivVals
        });
        break;
      case "evVal":
        let evVals = [...this.state.evVals];
        evVals[id] = value;
        this.setState({
          evVals: evVals
        });
        break;
      case "boost":
        let boosts = [...this.state.boosts];
        boosts[id] = value;
        this.setState({
          boosts: boosts
        });
        break;
      case "abilityOn":
        this.setState({ [name]: !this.state.abilityOn });
        break;
      default:
        this.setState({
          [name]: value
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
          evVal={this.state.evVals[i]}
          // TODO incorporate rawstats through smogon pokemon object
          //rawStat={}
          boost={this.state.boosts[i]}
          handleChange={event => this.handleChange(event)}
          handleRange={event => this.handleRange(event)}
          index={i}
        />
      );
    }

    //Loop render moves
    //const moveInputs = [];

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
          <InputGender
            gender={this.state.gender}
            handleChange={event => this.handleChange(event)}
          />
          <Weight weight={this.state.weight} />
          {statInputs}
          <InputNature
            nature={this.state.nature}
            handleChange={event => this.handleChange(event)}
          />
          <InputAbility
            ability={this.state.ability}
            abilityOn={this.state.abilityOn}
            handleChange={event => this.handleChange(event)}
          />
          <InputItem
            item={this.state.item}
            handleChange={event => this.handleChange(event)}
          />
          <InputStatus
            status={this.state.status}
            handleChange={event => this.handleChange(event)}
          />
          {/* TODO calculate percent HP, incorporate maxHP value, DO NOT make %HP input */}
          <InputHP
            curHP={this.state.curHP}
            maxHP="341"
            percentHP="100"
            handleChange={event => this.handleChange(event)}
            handleRange={event => this.handleRange(event)}
          />
          {/* TODO loop render moves */}
          <InputMove />
          <h1>
            {this.state.species}
            <br />
            {this.state.types[0]} {this.state.types[1]}
            <br />
            {this.state.abilityOn && "true"}
          </h1>
        </fieldset>
      </div>
    );
  }
}

export default InputPokemon;
