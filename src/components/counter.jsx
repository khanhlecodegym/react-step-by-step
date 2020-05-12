import React, { Component } from "react";

export class Counter extends Component {

    state = {
        counter: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    // constructor() {
    //     super();
    //     // console.log(this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        console.log("hehehe");

        console.log(this);
    }

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
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
