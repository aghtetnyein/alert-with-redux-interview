import { combineReducers } from "redux";

import alertListReducer from "./alertList.reducer";

const reducers = combineReducers({
  alertList: alertListReducer,
});

export default reducers;
