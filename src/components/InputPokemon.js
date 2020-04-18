/////// IMPORTS /////////////////////////////////////////////////////////////////////////////////

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
//import InputHP from "./InputHP";
import {
  gen,
  validSpecies,
  validMove,
  move,
  pokemon,
  statNames,
} from "../utils";

////// REFERENCE/EXPOSE DATA /////////////////////////////////////////////////////////////////////////
import { Pokemon, Move } from "@smogon/calc";

//////////// OBJECT DEFINITION //////////////////////////////////////////////////////////////
//used to store non input data from the pokemon class only within this component
let pokeInfo = {
  weight: "10.0",
  stats: ["100", "100", "100", "100", "100", "100"],
};

//////////// COMPONENT DEFINITION ////////////////////////////////////////////////////////////

class InputPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = pokemon;
  }

  //// STATE CHANGE HANDLERS //////////////////////////////////////////////////////////////////////////

  onSubmit(event) {
    event.preventDefault();
  }

  handleRange(event, data) {
    const input = event.target;
    if (input.value < parseInt(input.min, 10)) {
      input.value = input.min;
      this.handleChange(event, data);
    } else if (input.value > parseInt(input.max, 10)) {
      input.value = input.max;
      this.handleChange(event, data);
    } else {
      this.handleChange(event, data);
    }
  }

  handleChange(event, data) {
    const { name, value, id } = event.target;

    switch (name) {
      case "species":
        this.setSpeciesState(value);
        this.setState({
          [name]: value,
        });
        break;
      case "types":
        let types = [...this.state.types];
        types[id] = value;
        this.setState({
          types: types,
        });
        break;
      case "baseVal":
        let baseVals = [...this.state.baseVals];
        baseVals[id] = value;
        this.setState({
          baseVals: baseVals,
        });
        break;
      case "ivVal":
        let ivVals = [...this.state.ivVals];
        ivVals[id] = value;
        this.setState({
          ivVals: ivVals,
        });
        break;
      case "evVal":
        let evVals = [...this.state.evVals];
        evVals[id] = value;
        this.setState({
          evVals: evVals,
        });
        break;
      case "boost":
        let boosts = [...this.state.boosts];
        boosts[id] = value;
        this.setState({
          boosts: boosts,
        });
        break;
      case "abilityOn":
        this.setState({ [name]: !this.state.abilityOn });
        break;
      case "isMax":
        this.setState({ [name]: !this.state.isMax });
        break;
      case "moveName":
        this.setMoveNameState(value, data.move);
        break;
      case "movePower":
        this.setMovePowerState(value, data.move);
        break;
      case "moveType":
        this.setMoveTypeState(value, data.move);
        break;
      case "moveCat":
        this.setMoveCatState(value, data.move);
        break;
      case "moveHits":
        this.setMoveHitsState(value, data.move);
        break;
      case "moveCrit":
        this.setMoveCritState(data.move);
        break;
      default:
        this.setState({
          [name]: value,
        });
    }
  }

  //////// STATE CHANGE UTIL FUNCITONS /////////////////////////////////////////////////////////////////////
  setSpeciesState(input) {
    if (validSpecies(input)) {
      let state = this.state;
      let currPokemon = new Pokemon(gen, input, {
        ivs: {
          hp: +state.ivVals[0],
          atk: +state.ivVals[1],
          def: +state.ivVals[2],
          spa: +state.ivVals[3],
          spd: +state.ivVals[4],
          spe: +state.ivVals[5],
        },
        evs: {
          hp: state.evVals[0],
          atk: state.evVals[1],
          def: state.evVals[2],
          spa: state.evVals[3],
          spd: state.evVals[4],
          spe: state.evVals[5],
        },
      });

      this.setState({
        types: [currPokemon.type1, currPokemon.type2 || "None"],
        baseVals: [...Object.values(currPokemon.species.bs)],
        curHP: currPokemon.maxHP(),
      });
    }
    return;
  }

  //TODO OPTIONAL toggle displayed max move name and power
  setMoveNameState(input, oldMove) {
    const idx = this.state.moves.findIndex((move) => move === oldMove);
    let newMove;

    if (validMove(input)) {
      let { name, type, bp, category, hits } = new Move(gen, input, {
        ability: this.state.ability,
      });
      newMove = { name, type, bp, category, hits };
    } else {
      newMove = { ...move, name: input };
    }

    const moves = [...this.state.moves];
    moves.splice(idx, 1, newMove);
    this.setState({ moves });
  }

  setMovePowerState(input, oldMove) {
    const idx = this.state.moves.findIndex((move) => move === oldMove);
    const newMove = { ...oldMove, bp: input };
    const moves = [...this.state.moves];
    moves.splice(idx, 1, newMove);
    this.setState({ moves });
  }

  setMoveTypeState(input, oldMove) {
    const idx = this.state.moves.findIndex((move) => move === oldMove);
    const newMove = { ...oldMove, type: input };
    const moves = [...this.state.moves];
    moves.splice(idx, 1, newMove);
    this.setState({ moves });
  }

  setMoveCatState(input, oldMove) {
    const idx = this.state.moves.findIndex((move) => move === oldMove);
    const newMove = { ...oldMove, category: input };
    const moves = [...this.state.moves];
    moves.splice(idx, 1, newMove);
    this.setState({ moves });
  }

  setMoveHitsState(input, oldMove) {
    const idx = this.state.moves.findIndex((move) => move === oldMove);
    const newMove = { ...oldMove, hits: input };
    const moves = [...this.state.moves];
    moves.splice(idx, 1, newMove);
    this.setState({ moves });
  }

  setMoveCritState(oldMove) {
    const idx = this.state.moves.findIndex((move) => move === oldMove);
    const newMove = { ...oldMove, crit: !oldMove.crit };
    const moves = [...this.state.moves];
    moves.splice(idx, 1, newMove);
    this.setState({ moves });
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
          spe: state.boosts[5],
        },
        ivs: {
          hp: +state.ivVals[0],
          atk: +state.ivVals[1],
          def: +state.ivVals[2],
          spa: +state.ivVals[3],
          spd: +state.ivVals[4],
          spe: +state.ivVals[5],
        },
        evs: {
          hp: state.evVals[0],
          atk: state.evVals[1],
          def: state.evVals[2],
          spa: state.evVals[3],
          spd: state.evVals[4],
          spe: state.evVals[5],
        },
      });

      pokeInfo.weight = currPokemon.weight;
      pokeInfo.stats = [...Object.values(currPokemon.stats)];
      pokeInfo.stats[0] = currPokemon.maxHP();
    }
  }

  render() {
    this.setPokeInfo();

    //Loop render stat input components
    const statInputs = statNames.map((statNames, idx) => (
      <InputStat
        title={statNames}
        key={statNames}
        baseVal={this.state.baseVals[idx]}
        ivVal={this.state.ivVals[idx]}
        evVal={this.state.evVals[idx]}
        stat={pokeInfo.stats[idx]}
        boost={this.state.boosts[idx]}
        handleChange={(event) => this.handleChange(event)}
        handleRange={(event) => this.handleRange(event)}
        index={idx}
      />
    ));

    //Loop render moves
    const moveInputs = this.state.moves.map((move, idx) => (
      <InputMove
        key={idx}
        index={idx}
        moveName={move.name}
        movePower={move.bp}
        moveType={move.type}
        moveCat={move.category}
        moveHits={move.hits}
        isMax={this.state.isMax}
        handleChange={(event) => this.handleChange(event, { move })}
        handleRange={(event) => this.handleRange(event, { move })}
      />
    ));

    return (
      <div aria-label="Pok&eacute;mon" className="panel" role="region">
        <fieldset className="pokeInput" id="p">
          <legend align="center">Pok&eacute;mon</legend>
          <InputSpecies
            species={this.state.species}
            handleChange={(event) => this.handleChange(event)}
          />
          <InputType
            types={this.state.types}
            handleChange={(event) => this.handleChange(event)}
          />
          <InputGender
            gender={this.state.gender}
            handleChange={(event) => this.handleChange(event)}
          />
          <Weight weight={pokeInfo.weight} />
          {statInputs}
          <InputNature
            nature={this.state.nature}
            handleChange={(event) => this.handleChange(event)}
          />
          <InputAbility
            ability={this.state.ability}
            abilityOn={this.state.abilityOn}
            handleChange={(event) => this.handleChange(event)}
          />
          <InputItem
            item={this.state.item}
            handleChange={(event) => this.handleChange(event)}
          />
          <InputStatus
            status={this.state.status}
            handleChange={(event) => this.handleChange(event)}
          />
          {moveInputs}
        </fieldset>
      </div>
    );
  }
}

export default InputPokemon;
