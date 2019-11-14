import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.startingValue
    };
  }

  //   state = {
  //     count: 0
  //   };

  //   handleIncBtn() {
  //     this.state.count += 1;
  //   }
  handleIncBtn = () => {
    // this.state.count += 1; // WRONG // MUTATION
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecBtn = () => {
    // this.state.count -= 1; // WRONG // MUTATION
    this.state.count === 0
      ? alert("Congratulation y've reached bottom")
      : this.setState({
          count: this.state.count - 1
        });
  };

  render() {
    // console.log(this);
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncBtn}> Increment </button>
        <button onClick={this.handleDecBtn}> Decrement </button>
      </div>
    );
  }
}

export default Counter;
