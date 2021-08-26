import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Grommet } from "grommet";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

const Theme = {
  global: { colors: { doc: "#ff99cc" } }
};

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Grommet theme={Theme}>
      <App />
    </Grommet>
  </Provider>,
  document.querySelector("#root")
);
