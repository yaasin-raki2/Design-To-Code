import { UserActionTypes } from "./user.types";
import { UserPayloadTD } from "./user.payload";

export interface SignUp {
  type: UserActionTypes.SIGN_UP;
  payload: UserPayloadTD;
}

export interface LogIn {
  type: UserActionTypes.LOG_IN;
  payload: UserPayloadTD;
}
