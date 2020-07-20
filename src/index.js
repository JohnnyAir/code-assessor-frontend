import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import global styles
import 'semantic-ui-css/semantic.min.css';
import "codemirror/lib/codemirror.css";
import "./assets/css/custom.css";

ReactDOM.render(<App />, document.getElementById("app-root"));

serviceWorker.unregister();
