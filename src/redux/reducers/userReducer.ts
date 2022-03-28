import { User } from "../../models/user.interface";

import { UserActions } from "../actions/userActionCreator/userAction.interface";

import { UsersActionTypes } from "../action-types/action-types";

export interface UsersState {
  isUserLogged: boolean;
  loggedUser: User | null;
  users: User[];
  isFailure: {
    isFailureStatus: boolean;
    message: string;
  };
}

export const initialUserState: UsersState = {
  isUserLogged: false,
  loggedUser: null,
  users: [],
  isFailure: {
    isFailureStatus: false,
    message: "string",
  },
};

const userReducer = (
  state = initialUserState,
  action: UserActions
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.LOGIN:
      return {
        ...state,
        isUserLogged: true,
        loggedUser: action.payload,
        isFailure: {
          ...state.isFailure,
          isFailureStatus: false,
          message: "",
        },
      };
    case UsersActionTypes.LOGOUT:
      return { ...state, loggedUser: null, isUserLogged: false };
    case UsersActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loggedUser: null,
        isUserLogged: false,
        isFailure: {
          ...state.isFailure,
          isFailureStatus: true,
          message: action.payload,
        },
      };

    case UsersActionTypes.RESET_ERROR:
      return {
        ...state,
        isFailure: {
          ...state.isFailure,
          isFailureStatus: false,
          message: "",
        },
      };
    default:
      return state;
  }
};

export default userReducer;
