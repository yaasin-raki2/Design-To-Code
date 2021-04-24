import { UserActionTypes } from "./user.types";
import { UserPayloadTD } from "./user.payload";

export interface SignUpStartAction {
  type: UserActionTypes.SIGN_UP_START;
  payload: {
    userName: string;
    email: string;
    password: string;
    userType: string;
  };
}

export interface SignUpFailureAction {
  type: UserActionTypes.SIGN_UP_FAILURE;
  payload: any;
}

export interface SignUpSuccessAction {
  type: UserActionTypes.SIGN_UP_SUCCESS;
  payload: UserPayloadTD;
}

export interface LogInStartAction {
  type: UserActionTypes.LOG_IN_START;
  payload: {
    email: string;
    password: string;
  };
}

export interface LogInFailureAction {
  type: UserActionTypes.LOG_IN_FAILURE;
  payload: any;
}

export interface LogInSuccessAction {
  type: UserActionTypes.LOG_IN_SUCCESS;
  payload: UserPayloadTD;
}
