import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  render() {
    return (
      <div className="m-5">
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button className="btn btn-sm btn-primary">Increment</button>
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "danger" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
