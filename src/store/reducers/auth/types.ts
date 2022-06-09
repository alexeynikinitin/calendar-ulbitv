import {IUser} from "src/models/IUser";

export interface IAuthState {
   isAuth: boolean
   isLoading: boolean
   errorMessage: string
   user: IUser
}

export enum AuthTypesActions {
   SET_IS_AUTH = 'SET_IS_AUTH',
   SET_IS_LOADING = 'SET_IS_LOADING',
   SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE',
   SET_USER = 'SET_USER',
}

export interface ISetIsAuthAction {
   type: AuthTypesActions.SET_IS_AUTH,
   payload: boolean
}

export interface ISetErrorMessageAction {
   type: AuthTypesActions.SET_ERROR_MESSAGE,
   payload: string
}

export interface ISetIsLoadingAction {
   type: AuthTypesActions.SET_IS_LOADING,
   payload: boolean
}

export interface ISetUserAction {
   type: AuthTypesActions.SET_USER,
   payload: IUser
}

export type AuthActions =
   | ISetIsAuthAction
   | ISetIsLoadingAction
   | ISetErrorMessageAction
   | ISetUserAction
