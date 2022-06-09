export interface IAuthState {
   isAuth: boolean
}

export enum AuthTypesActions {
   SET_AUTH = 'SET_AUTH'
}

export interface ISetAuthAction {
   type: AuthTypesActions.SET_AUTH,
   payload: boolean
}

export type AuthActions = ISetAuthAction
