import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div class="card">
        <spam>{this.formatCount()}</spam>
        <button class="btn btn-danger">Increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : <h1>count</h1>;
  }
}

export default Counter;
