import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "antd/dist/antd.css";

import MyProvider from "./context";

ReactDOM.render(
  <MyProvider>
    <AppRouter />
  </MyProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
