export interface User {
  id: number;
  username: string;
  avatar: string;
}

export interface UserLoginToken {
  expiresIn: string;
  access_token: string;
}

export interface FullUserDataResponse extends UserLoginToken, User {}

export interface UserCredentials {
  username: string;
  password: string;
}
