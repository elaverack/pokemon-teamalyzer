/////// IMPORTS /////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { gen, validSpecies } from "../utils";
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
/* TODO
use the pokemon class from the calc to fill in blanks
make this component repeatable for 6 pokemon
*/

////// REFERENCE/EXPOSE DATA /////////////////////////////////////////////////////////////////////////
import { Pokemon, MOVES, SPECIES } from "@smogon/calc";
console.log(MOVES);
var reference = new Pokemon(gen, "Pikachu");
console.log(reference);
console.log(SPECIES);

////// OBJECT DEFINITIONS /////////////////////////////////////////////////////////////////////////////
const statNames = [
  "HP",
  "Attack",
  "Defense",
  "Sp-Attack",
  "Sp-Defense",
  "Speed"
];

let pokeInfo = {
  weight: "10.0",
  stats: ["100", "100", "100", "100", "100", "100"]
};

let move = {
  name: "thunderbolt",
  power: "90",
  type: "Electric",
  cat: "Special",
  isMulti: true,
  hitNum: "1"
};

let pokemon = {
  species: "",
  types: ["None", "None"],
  gender: "Genderless",
  baseVals: ["100", "100", "100", "100", "100", "100"],
  ivVals: ["31", "31", "31", "31", "31", "31"],
  evVals: ["0", "0", "0", "0", "0", "0"],
  boosts: ["0", "0", "0", "0", "0", "0"],
  nature: "Serious",
  ability: "",
  abilityOn: true,
  item: "",
  status: "",
  isMax: false,
  // curHP: "100"
  moves: new Array(4).fill(move)
};

console.log(pokemon);

//////////// COMPONENT DEFINITION ////////////////////////////////////////////////////////////

class InputPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = pokemon;
  }

  //// STATE CHANGE HANDLERS //////////////////////////////////////////////////////////////////////////

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
    //QUESTION want to change ids to index but cannot access through event.target??
    const { name, value, id } = event.target;
    console.log(event.target);
    console.log(name, id, value);

    switch (name) {
      case "species":
        this.setSpeciesState(value);
        this.setState({
          [name]: value
        });
        break;
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
      case "isMax":
        this.setState({ [name]: !this.state.isMax });
        break;
      default:
        this.setState({
          [name]: value
        });
    }
  }

  //////// STATE CHANGE UTIL FUNCITONS /////////////////////////////////////////////////////////////////////
  //TODO use to grab info from pokemon class and update state with it
  setSpeciesState(input) {
    if (validSpecies(input)) {
      let state = this.state;
      let currPokemon = new Pokemon(gen, input, {
        ivs: {
          //TODO QUESTION find a cleaner way around this, doesnt like these number strings for some reason
          // evs seem to work fine so idk
          hp: parseInt(state.ivVals[0], 10),
          atk: parseInt(state.ivVals[1], 10),
          def: parseInt(state.ivVals[2], 10),
          spa: parseInt(state.ivVals[3], 10),
          spd: parseInt(state.ivVals[4], 10),
          spe: parseInt(state.ivVals[5], 10)
        },
        evs: {
          hp: state.evVals[0],
          atk: state.evVals[1],
          def: state.evVals[2],
          spa: state.evVals[3],
          spd: state.evVals[4],
          spe: state.evVals[5]
        }
      });

      this.setState({
        types: [currPokemon.type1, currPokemon.type2 || "None"],
        baseVals: [...Object.values(currPokemon.species.bs)],
        curHP: currPokemon.maxHP()
      });
    }
    return;
  }

  // Grabs info for fields not stored in state
  setPokeInfo() {
    if (validSpecies(this.state.species)) {
      let state = this.state;
      let currPokemon = new Pokemon(gen, state.species, {
        item: state.item,
        ability: state.ability,
        nature: state.nature,
        abilityOn: state.abilityOn,
        isDynamaxed: state.isMax,
        boosts: {
          hp: state.boosts[0],
          atk: state.boosts[1],
          def: state.boosts[2],
          spa: state.boosts[3],
          spd: state.boosts[4],
          spe: state.boosts[5]
        },
        ivs: {
          //TODO QUESTION find a cleaner way around this, doesnt like these number strings for some reason
          // evs seem to work fine so idk
          hp: parseInt(state.ivVals[0], 10),
          atk: parseInt(state.ivVals[1], 10),
          def: parseInt(state.ivVals[2], 10),
          spa: parseInt(state.ivVals[3], 10),
          spd: parseInt(state.ivVals[4], 10),
          spe: parseInt(state.ivVals[5], 10)
        },
        evs: {
          hp: state.evVals[0],
          atk: state.evVals[1],
          def: state.evVals[2],
          spa: state.evVals[3],
          spd: state.evVals[4],
          spe: state.evVals[5]
        }
      });

      pokeInfo.weight = currPokemon.weight;
      pokeInfo.stats = [...Object.values(currPokemon.stats)];
      pokeInfo.stats[0] = currPokemon.maxHP();
      console.log(currPokemon.stats);
    }
  }

  render() {
    this.setPokeInfo();
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
          stat={pokeInfo.stats[i]}
          boost={this.state.boosts[i]}
          handleChange={event => this.handleChange(event)}
          handleRange={event => this.handleRange(event)}
          index={i}
        />
      );
    }

    //Loop render moves
    const moveInputs = [];
    for (const [i] of this.state.moves.entries()) {
      moveInputs.push(
        <InputMove
          key={i}
          index={i}
          moveName={this.state.moves[i].name}
          movePower={this.state.moves[i].power}
          moveType={this.state.moves[i].type}
          moveCat={this.state.moves[i].cat}
          isMulti={this.state.moves[i].isMulti}
          hitNum={this.state.moves[i].hitNum}
          isMax={this.state.isMax}
          handleChange={event => this.handleChange(event)}
          handleRange={event => this.handleRange(event)}
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
          <InputGender
            gender={this.state.gender}
            handleChange={event => this.handleChange(event)}
          />
          <Weight weight={pokeInfo.weight} />
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
          {/* TODO calculate percent HP, incorporate maxHP value, make maxHP change on load, DO NOT make %HP input */}
          {/* <InputHP
            curHP={this.state.curHP}
            maxHP={pokeInfo.stats[0]}
            percentHP={Math.floor((this.state.curHP / pokeInfo.stats[0]) * 100)}
            handleChange={event => this.handleChange(event)}
            handleRange={event => this.handleRange(event)}
          /> */}
          {/* TODO loop render moves */}
          {moveInputs}
          <h1>
            {this.state.species}
            <br />
            {this.state.types[0]} {this.state.types[1]}
            <br />
            {this.state.isMax && "true"}
          </h1>
        </fieldset>
      </div>
    );
  }
}

export default InputPokemon;
