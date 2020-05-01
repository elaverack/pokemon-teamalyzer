import React from "react";
import { observer } from "mobx-react";

const InputLevel = observer(
  class InputLevel extends React.Component {
    render() {
      return (
        <div>
          <fieldset>
            <legend>Level</legend>
            <input
              className="inputLevel"
              name="level"
              value={this.props.teamLevel.level}
              onChange={(event) => {
                this.props.teamLevel.level = event.target.value;
              }}
            />
          </fieldset>
        </div>
      );
    }
  }
);

export default InputLevel;
