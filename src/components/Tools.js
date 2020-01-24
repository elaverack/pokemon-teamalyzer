import React from "react";

const toolBlock = {
  float: "right",
  border: "1px solid"
};

class Tools extends React.Component {
  render() {
    console.log(this.props);
    return <div style={toolBlock}>Tools {this.props.team[0].name}</div>;
  }
}

export default Tools;
