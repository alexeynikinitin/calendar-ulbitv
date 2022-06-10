import {
   AuthTypesActions, ISetErrorMessageAction,
   ISetIsAuthAction,
   ISetIsLoadingAction, ISetUserAction
} from "./types";
import {IUser} from "src/models/IUser";
import axios from "axios";
import {AppDispatch} from "src/store/index";

export const authActionCreators = {
   setIsAuth: (isAuth: boolean): ISetIsAuthAction => ({
      type: AuthTypesActions.SET_IS_AUTH,
      payload: isAuth
   }),
   setIsLoading: (isLoading: boolean): ISetIsLoadingAction => ({
      type: AuthTypesActions.SET_IS_LOADING,
      payload: isLoading
   }),
   setErrorMessage: (message: string): ISetErrorMessageAction => ({
      type: AuthTypesActions.SET_ERROR_MESSAGE,
      payload: message
   }),
   setUser: (user: IUser): ISetUserAction => ({
      type: AuthTypesActions.SET_USER,
      payload: user
   }),
}

export const authThunkCreators = {
   login: (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
         dispatch(authActionCreators.setIsLoading(true))
         setTimeout(async () => {
            const users = await axios.get<IUser[]>('./users.json').then(res => res.data)
            const mockUsers = users.find(u => u.username === username && u.password === password)
            if (mockUsers) {
               localStorage.setItem('auth', 'true')
               localStorage.setItem('username', mockUsers.username)
               dispatch(authActionCreators.setUser(mockUsers))
               dispatch(authActionCreators.setIsAuth(true))
            } else {
               dispatch(authActionCreators.setErrorMessage('Неправильный логин или пароль'))
            }
         }, 1000)
      } catch (e) {

      }
   },
   logout: () => async (dispatch: AppDispatch) => {
      localStorage.removeItem('auth')
      localStorage.removeItem('username')
      dispatch(authActionCreators.setUser({} as IUser))
      dispatch(authActionCreators.setIsAuth(false))
   }
}
