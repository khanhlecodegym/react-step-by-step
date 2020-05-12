import React, { Component } from "react";

export class Counter extends Component {

    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    }

    handleIncrement = product => {
        this.setState({ value: this.state.value + 1});
    }

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1, name: 'Mì Tôm'})
    }
  render() {
    console.log('props', this)
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button onClick={() => this.handleIncrement({ id: 1, name: 'Mì Tôm'})} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCounter() {
      const {value} = this.state;
      return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
      let classes = 'badge m-2 badge-';
      classes += this.state.value === 0 ? 'warning' : 'primary';

      return classes;
  }
}

export default Counter;
