import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import logger from "./logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["logger"]
};

const rootReducer = combineReducers({
  logger
});

export default persistReducer(persistConfig, rootReducer);
