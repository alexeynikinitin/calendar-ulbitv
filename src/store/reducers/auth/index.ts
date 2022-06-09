import {AuthActions, AuthTypesActions, IAuthState} from "../auth/types";
import {IUser} from "src/models/IUser";

const initialState: IAuthState = {
   isAuth: false,
   isLoading: false,
   errorMessage: '',
   user: {} as IUser
}

export default function authReducer(state = initialState, action: AuthActions): IAuthState {
   switch (action.type) {
      case AuthTypesActions.SET_IS_AUTH:
         return {...state, isAuth: action.payload}
      case AuthTypesActions.SET_IS_LOADING:
         return {...state, isLoading: action.payload}
      case AuthTypesActions.SET_ERROR_MESSAGE:
         return {...state, errorMessage: action.payload, isLoading: false}
      case AuthTypesActions.SET_USER:
         return {...state, user: action.payload, isLoading: false}
      default:
         return state
   }
}
