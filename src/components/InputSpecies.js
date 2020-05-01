import React from "react";
import { observer } from "mobx-react";
import { Pokemon } from "@smogon/calc";
import { genSpeciesOptions, validSpecies, gen } from "../utils";

const InputSpecies = observer(
  class InputSpecies extends React.Component {
    onSpeciesChange(event) {
      this.props.pokeState.species = event.target.value;
      if (validSpecies(event.target.value)) {
        let currPokemon = new Pokemon(gen, event.target.value);
        this.props.pokeState.types = [
          currPokemon.type1,
          currPokemon.type2 || "None",
        ];
        this.props.pokeState.gender = currPokemon.gender;
        this.props.pokeState.weight = currPokemon.weight;
        this.props.pokeState.baseVals = [
          ...Object.values(currPokemon.species.bs),
        ];
        this.props.pokeState.ability = currPokemon.ability;
      }
    }

    onDynamaxChange() {
      this.props.pokeState.isMax = !this.props.pokeState.isMax;
    }

    render() {
      return (
        <div>
          <input
            type="text"
            list="speciesOptions"
            placeholder="(Ditto)"
            value={this.props.pokeState.species}
            onChange={(event) => {
              this.onSpeciesChange(event);
            }}
          />
          <datalist id="speciesOptions">{genSpeciesOptions()}</datalist>
          <button
            type="button"
            title="Dynamax this Pokemon?"
            onClick={() => {
              this.onDynamaxChange();
            }}
          >
            Dynamax
          </button>
        </div>
      );
    }
  }
);

export default InputSpecies;

/* OPTIONAL make dropdown to flip formes of pokemon without changing overall species
        <div className="hide">
          <label>Forme</label>
          <select className="forme"></select>
        </div> */
