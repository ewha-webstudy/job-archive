import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import logger from "./logger";
import tagchecker from "./tagchecker";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["logger"]
};

const rootReducer = combineReducers({
  logger,
  tagchecker
});

export default persistReducer(persistConfig, rootReducer);
