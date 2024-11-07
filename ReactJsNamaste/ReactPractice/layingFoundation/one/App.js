import React from "react";
import ReactDOM from "react-dom";

// JSX => (babel) => React.createElement => JSobject => HTMLElement(render)

// JSX is transpiled (convert JSX to code what react,JS understand) before it reaches the JS - Done By PARCEL - inside this Babel do this transpilation
const jsxHeading = <h1>Learing this is JSX</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)