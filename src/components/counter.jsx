import React, { Component } from "react";

export class Counter extends Component {

    state = {
        counter: 1
    }

    styles = {
        fontSize: '30px',
        fontWeight: 'bold'
    }

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 20 }} className="badge badge-primary m-2">{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCounter() {
      const {counter} = this.state;
      return counter === 0 ? 'Zero' : counter;
  }
}

export default Counter;
