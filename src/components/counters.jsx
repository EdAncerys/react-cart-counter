import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <button onClick={onReset} className="btn btn-primary m-2">
            Reset
          </button>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
