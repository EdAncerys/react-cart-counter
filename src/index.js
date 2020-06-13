import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counterComponents";

const element = <h1>Hello World</h1>;
const greeting = <h2>Hello from React App</h2>;

ReactDOM.render(<Counter />, document.getElementById("root"));
