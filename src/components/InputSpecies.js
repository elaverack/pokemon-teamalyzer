import React from "react";
import { genSpeciesOptions } from "../utils";

// TODO onchange handler and state update

class InputSpecies extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="speciesSelector"
          list="speciesOptions"
          placeholder="(No Species)"
          value={this.props.species}
          onChange={this.props.handleChange}
          name="species"
        />
        <datalist id="speciesOptions">{genSpeciesOptions()}</datalist>
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

export default InputSpecies;
