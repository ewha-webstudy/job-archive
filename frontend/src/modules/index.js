import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage에 저장

import logger from "./logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["logger"] // 여러 reducer 중 logger reducer만 localStorage에 저장
  // blacklist -> 그것만 제외
};
const rootReducer = combineReducers({
  logger
});

export default persistReducer(persistConfig, rootReducer);
