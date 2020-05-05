import React from 'react';
import Inputs from './Inputs';
import Tools from './Tools';
import { teamState } from '../store';

class Teamalyzer extends React.Component {
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
