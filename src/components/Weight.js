import React from "react";
import { observer } from "mobx-react";

const Weight = observer(
  class Weight extends React.Component {
    render() {
      return (
        <div>
          <label>Weight (kg): {this.props.pokeState.weight}</label>
        </div>
      );
    }
  }
);

export default Weight;
