import { UserActionTypes } from "./user.types.d";
import { UserPayloadTD } from "./user.payload.d";
import { Action } from "./user.actions.d";

interface UserState {
  currentUser: UserPayloadTD | null;
  errors: any;
}

const initialState = {
  currentUser: null,
  errors: null,
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errors: null,
      };
    case UserActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errors: null,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.LOG_IN_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
