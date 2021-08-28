import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Grommet } from "grommet";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

const Theme = {
  global: { colors: { doc: "#ff99cc" } }
};

const store = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Grommet theme={Theme}>
        <App />
      </Grommet>
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
