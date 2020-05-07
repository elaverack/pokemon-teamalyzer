import React from 'react';
import { observer } from '../../node_modules/mobx-react/dist/index';
import OffensiveTable from './tools/OffensiveTable';
import DefensiveTable from './tools/DefensiveTable';

const toolBlock = {
  float: 'right',
  border: '1px solid',
};

@observer
class Tools extends React.Component {
  render() {
    return (
      <div style={toolBlock}>
        <legend>Tools</legend>
        <h1></h1>
        <OffensiveTable teamState={this.props.teamState} />
        <DefensiveTable teamState={this.props.teamState} />
      </div>
    );
  }
}

export default Tools;
