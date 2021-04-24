import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./user/user.reducer";

export const store = createStore(userReducer, applyMiddleware(thunk));
