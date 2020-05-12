import React, { Component } from "react";

export class Counter extends Component {
  state = {
    counter: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <h3>Không có tag nào tồn tại</h3>;
    }

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <React.Fragment>
        {this.state.tags.length === 0 && "Vui long tạo mới tags"}
        {this.renderTags()}
    </React.Fragment>;
  }

  formatCounter() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";

    return classes;
  }
}

export default Counter;
