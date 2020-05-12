import React, { Component } from "react";

export class Counter extends Component {

    state = {
        counter: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({ counter: this.state.counter + 1});
    }

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1, name: 'Mì Tôm'})
    }
  render() {
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button onClick={() => this.handleIncrement({ id: 1, name: 'Mì Tôm'})} className="btn btn-secondary btn-sm">Increment</button>
      </div>
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
