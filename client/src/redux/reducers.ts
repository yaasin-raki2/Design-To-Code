import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
