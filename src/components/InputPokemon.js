/////// IMPORTS /////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { observer } from "mobx-react";
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
import { gen, validMove, statNames } from "../utils";
import { move } from "../store";

////// REFERENCE/EXPOSE DATA /////////////////////////////////////////////////////////////////////////
import { Move } from "@smogon/calc";

//////////// COMPONENT DEFINITION ////////////////////////////////////////////////////////////

const InputPokemon = observer(
  class InputPokemon extends React.Component {
    constructor(props) {
      super(props);
      this.state = props.pokeState;
    }

    //// STATE CHANGE HANDLERS //////////////////////////////////////////////////////////////////////////

    handleChange(event, data) {
      const { name, value } = event.target;
      switch (name) {
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

    render() {
      //Loop render stat input components
      const statInputs = statNames.map((statNames, idx) => (
        <InputStat
          title={statNames}
          key={statNames}
          pokeState={this.props.pokeState}
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
