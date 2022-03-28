import { User } from "../../../models/user.interface";
import { UsersActionTypes } from "../../action-types/action-types";

export interface UserLogin {
  type: UsersActionTypes.LOGIN;
  payload: User;
}

export interface UserLogout {
  type: UsersActionTypes.LOGOUT;
}
export interface LoginFauilure {
  type: UsersActionTypes.LOGIN_ERROR;
  payload: string;
}
export interface ResetError {
  type: UsersActionTypes.RESET_ERROR;
}

export type UserActions = UserLogin | UserLogout | LoginFauilure | ResetError;
