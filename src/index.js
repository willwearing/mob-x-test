import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";

import MissionsStore from "./stores/MissionsStore";
const missionStore = new MissionsStore();

ReactDOM.render(
  <Provider missionStore={missionStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
