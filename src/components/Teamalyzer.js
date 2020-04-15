import React from "react";

import Inputs from "./Inputs";
import Tools from "./Tools";
import { pokemon, move } from "../utils";

class Teamalyzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // field
    };
  }

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
