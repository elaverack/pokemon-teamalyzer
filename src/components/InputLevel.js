import React from 'react';
import { observer } from 'mobx-react';
import { handleRange } from '../utils';

@observer
class InputLevel extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Level</legend>
          <input
            type="number"
            min="1"
            max="100"
            step="1"
            value={this.props.teamState.level}
            onChange={event => {
              let input = handleRange(event);
              this.props.teamState.level = input;
            }}
          />
        </fieldset>
      </div>
    );
  }
}

export default InputLevel;

//OPTIONAL have each pokemon have local level but then change to team level when teamLevel component is activated
