import {AuthActions, AuthTypesActions, IAuthState} from "../auth/types";

const initialState: IAuthState = {
   isAuth: true
}

export default function authReducer(state = initialState, action: AuthActions): IAuthState {
   switch (action.type) {
      case AuthTypesActions.SET_AUTH:
         return {...state, isAuth: action.payload}
      default:
         return state
   }
}
