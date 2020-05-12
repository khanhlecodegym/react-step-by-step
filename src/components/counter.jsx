import React, { Component } from "react";

export class Counter extends Component {

    state = {
        counter: 1
    }

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCounter()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCounter() {
      const {counter} = this.state;
      return counter === 0 ? 'Zero' : counter;
  }
}

export default Counter;
