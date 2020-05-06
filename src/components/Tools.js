import React from 'react';
import { observer } from '../../node_modules/mobx-react/dist/index';

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
        <h1>{this.props.teamState.team[0].species}</h1>
        {/* <OffensiveTable /> */}
        {/* <DefensiveTable /> */}
      </div>
    );
  }
}

export default Tools;
