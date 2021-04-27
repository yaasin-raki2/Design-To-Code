import { Dispatch } from "redux";
import axios from "axios";

import { UserActionTypes } from "./user.types.d";
import { Action, SignOut } from "./user.actions.d";

interface SignUpInput {
  userName: string;
  userType: string;
  email: string;
  password: string;
}

interface LogInInput {
  email: string;
  password: string;
}

export const signUp = ({ userName, userType, email, password }: SignUpInput) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UserActionTypes.SIGN_UP_START,
    });
    try {
      const { data } = await axios.post("http://localhost:4040/api/users/signup", {
        userName,
        userType,
        email,
        password,
      });

      dispatch({
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: data,
      });
    } catch (err) {
      let errors: { [key: string]: string } = {};

      interface ET {
        field: string;
        message: string;
      }

      err.response.data.errors.forEach((e: ET) => (errors[e.field] = e.message));

      dispatch({
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: errors,
      });
    }
  };
};

export const login = ({ email, password }: LogInInput) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UserActionTypes.LOG_IN_START,
    });
    try {
      const { data } = await axios.post("http://localhost:4040/api/users/signin", {
        email,
        password,
      });

      dispatch({
        type: UserActionTypes.LOG_IN_SUCCESS,
        payload: data,
      });
    } catch (err) {
      let errors: { [key: string]: string } = {};

      interface ET {
        field: string;
        message: string;
      }

      err.response.data.errors.forEach((e: ET) => (errors[e.field] = e.message));

      dispatch({
        type: UserActionTypes.LOG_IN_FAILURE,
        payload: errors,
      });
    }
  };
};

export const signout = (): SignOut => ({
  type: UserActionTypes.SIGN_OUT,
});
