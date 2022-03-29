import {
  User,
  UserCredentials,
} from "models/user.interface";
import { Dispatch } from "redux";

import {
  UserLogin,
  UserLogout,
  LoginFauilure,
  ResetError,
} from "../../actions/userActionCreator/userAction.interface";

import { UsersActionTypes } from "../../action-types/action-types";

const userLogin = (user: User): UserLogin => {
  return {
    type: UsersActionTypes.LOGIN,
    payload: user,
  };
};

export const userLogout = (): UserLogout => {
  return {
    type: UsersActionTypes.LOGOUT,
  };
};

const loginFailure = (message: string): LoginFauilure => {
  return {
    type: UsersActionTypes.LOGIN_ERROR,
    payload: message,
  };
};

export const resetError = (): ResetError => {
  return {
    type: UsersActionTypes.RESET_ERROR,
  };
};

export const fetchLoginUser = (userCredenrtials: UserCredentials) => {
  return async (dispatch: Dispatch<UserLogin | LoginFauilure>) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCredenrtials),
        }
      );
      const data = await response.json();

      if (data.statusCode === 404 || data.statusCode === 401) {
        dispatch(loginFailure(data.message));
        return;
      }

      dispatch(userLogin(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(loginFailure(error.message));
      }
      console.log(error);
    }
  };
};
