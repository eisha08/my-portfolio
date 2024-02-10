import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./Context";
import App from "./components/App";

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById("root"));
