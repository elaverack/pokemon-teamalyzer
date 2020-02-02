import React from "react";
import { SPECIES } from "@smogon/calc";

// TODO MAIN onchange handler and state update

class InputSpecies extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="speciesSelector" list="speciesList" />
        <datalist id="speciesList">
          {Object.keys(SPECIES[8]).map(name => (
            <option value={name}>{name}</option>
          ))}
        </datalist>
        {/* TODO STRETCH
        figure out how to import sets from smogon and store them
        <span
          id="importedSetsOptions"
          style={{ width: "auto", display: "none" }}
        >
          <input type="checkbox" id="importedSets" /> Only show imported sets{" "}
          <br />
          <button id="clearSets">Clear Custom Sets</button>
        </span> */}
        {/* TODO OPTIONAL
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
