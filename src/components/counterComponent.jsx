import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return (
      <div className="m-3">
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-sm btn-primary"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "danger" : "warning";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
