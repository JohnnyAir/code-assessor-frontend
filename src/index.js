import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import global styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";

ReactDOM.render(<App />, document.getElementById("app-root"));

serviceWorker.unregister();
