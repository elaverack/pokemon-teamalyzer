import React from "react";

import Inputs from "./Inputs";
import Tools from "./Tools";
import { teamState } from "../store";

class Teamalyzer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  //QUESTIONS
  // want to include feature that lets user flip between previous and current version of the team. is it possible?
  // can i treat the pokemon like moves and pass them into the handlechange function?
  // i want to be able to update the state from the import/export component

  render() {
    return (
      <div>
        <Inputs teamState={teamState} />
        <Tools teamState={teamState} />
      </div>
    );
  }
}

export default Teamalyzer;
