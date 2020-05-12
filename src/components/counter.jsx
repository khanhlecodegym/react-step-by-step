import React, { Component } from "react";

export class Counter extends Component {

    state = {
        counter: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
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
