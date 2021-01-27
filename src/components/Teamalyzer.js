import React from 'react';
import Inputs from './Inputs';
import Tools from './Tools';
import { enemyTeamState, teamState } from '../store';

const inputBlock = {
  float: 'center',
  border: '1px solid',
};

class Teamalyzer extends React.Component {
  render() {
    return (
      <div style={inputBlock}>
        <div>
          <Inputs teamState={teamState} enemyTeamState={enemyTeamState} />
        </div>
        <div>
          <Tools teamState={teamState} />
        </div>
      </div>
    );
  }
}

export default Teamalyzer;
