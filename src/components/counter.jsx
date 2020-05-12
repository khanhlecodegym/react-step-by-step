import React, { Component } from "react";

export class Counter extends Component {

    state = {
        counter: 0
    }

    // styles = {
    //     fontSize: '30px',
    //     fontWeight: 'bold'
    // }

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCounter() {
      const {counter} = this.state;
      return counter === 0 ? 'Zero' : counter;
  }

  getBadgeClasses() {
      let classes = 'badge m-2 badge-';
      classes += this.state.counter === 0 ? 'warning' : 'primary';

      return classes;
  }
}

export default Counter;
