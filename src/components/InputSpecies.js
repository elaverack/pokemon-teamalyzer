import React from "react";
import { observer } from "mobx-react";
import { Pokemon } from "@smogon/calc";
import { genSpeciesOptions, validSpecies, gen } from "../utils";

// TODO onchange handler and state update

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
            className="speciesSelector"
            list="speciesOptions"
            placeholder="(Ditto)"
            value={this.props.pokeState.species}
            onChange={(event) => {
              this.onSpeciesChange(event);
            }}
            name="species"
          />
          <datalist id="speciesOptions">{genSpeciesOptions()}</datalist>
          <button
            type="button"
            className="dynamaxButton"
            name="isMax"
            title="Dynamax this Pokemon?"
            onClick={() => {
              this.onDynamaxChange();
            }}
          >
            Dynamax
          </button>
          {/* TODO change species/button style to reflect dynamax state */}
          {/* STRETCH
        figure out how to import sets from smogon and store them
        <span
          id="importedSetsOptions"
          style={{ width: "auto", display: "none" }}
        >
          <input type="checkbox" id="importedSets" /> Only show imported sets{" "}
          <br />
          <button id="clearSets">Clear Custom Sets</button>
        </span> */}
          {/* OPTIONAL
        make dropdown to flip formes of pokemon without changing overall species
        <div className="hide">
          <label>Forme</label>
          <select className="forme"></select>
        </div> */}
        </div>
      );
    }
  }
);

export default InputSpecies;
