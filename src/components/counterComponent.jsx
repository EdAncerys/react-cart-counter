import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    const { onIncrement, onDelete, counter } = this.props;
    return (
      <div className="m-3">
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-sm btn-primary m-2"
          >
            Increment
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "danger" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
