import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import themeReducer from "./theme/theme.reducer";

const reducers = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
