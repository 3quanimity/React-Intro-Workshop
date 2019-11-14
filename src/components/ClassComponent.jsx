import React, { Component } from "react";

// CLASS COMPONENT
class ClassComponent extends Component {
  render() {
    console.log(this.props);
    return <h1>this is a class comp: {this.props.keyy}</h1>;
  }
}

export default ClassComponent;
