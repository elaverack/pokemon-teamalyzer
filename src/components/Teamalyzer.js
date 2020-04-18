import React from "react";

import Inputs from "./Inputs";
import Tools from "./Tools";
import { TeamState } from "../utils";

class Teamalyzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = TeamState;
  }

  //QUESTIONS
  // do my handleChange and handleRange functions need to live here?
  // how can i stop state from updating at this level until i want the team to be analyzed?
  // want to include feature that lets user flip between previous and current version of the team. is it possible?
  // can i treat the pokemon like moves and pass them into the handlechange function?
  // i want to be able to update the state from the import/export component

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
