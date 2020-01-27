import React from "react";

import Inputs from "./Inputs";
import Tools from "./Tools";

// TODO create state data object that takes all pokemon inputs

/* TODO State brainstorm
var Teamalyzer inputs = {
  field = {
    singles, doubles,
    weather = 
    field effects = stealthrock, steelsurge, spikes, etc
  }
  team = {
    pokemon[] = 
      species, type, forme, gender, level, stats[] = 
        hp, atk, def, satk, sdef, spe[ivs, evs]
      nature, ability, abilityOn, item, status, currentHPstat, currentHP% ??, move[] = 
        movename, power, type, category, isCrit, isMax
  }
}
*/

class Teamalyzer extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <Inputs />
        <Tools />
      </div>
    );
  }
}

export default Teamalyzer;
