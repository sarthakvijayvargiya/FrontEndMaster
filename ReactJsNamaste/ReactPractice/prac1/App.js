import React from "react";
import ReactDOM from "react-dom/client";
// creating element is core feature of react

const heading = React.createElement("h1", {}, "Hellow World from React");
//creating root from DOM maupilation is for browser so we use ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
