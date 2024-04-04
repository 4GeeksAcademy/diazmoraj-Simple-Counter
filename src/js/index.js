//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondCounter from "./component/SecondCounter.js";

//render your react application
let seconds = 0;
setInterval(() =>{
    ReactDOM.render(<SecondCounter seconds={seconds}/>, document.querySelector("#app"));
    seconds++;
}, 1000);
