export enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}

export interface ILoginModel {
    email: string,
    password: string
}

export interface IUser {
    email: string
}

export interface AuthState {
    user: IUser|null,
    isAuth: boolean
}

export interface LoginAuthAction {
    type: AuthActionTypes.LOGIN,
    payload: IUser
}

export interface LogoutAuthAction {
    type: AuthActionTypes.LOGOUT
}

export type AuthAction = LoginAuthAction | LogoutAuthAction;
