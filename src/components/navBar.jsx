import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-white" href="/">
          Cart Itmes:
          <span className="badge badge-pill badge-light mx-2">
            {this.props.totalCounters}
          </span>
          Total Itmes:
          <span className="badge badge-pill badge-light mx-2">
            {this.props.totalItems}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
