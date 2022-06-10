import {
   authActionCreators,
   authThunkCreators
} from "./auth/action-creators";

export const allActionCreators = {
   ...authActionCreators,
   ...authThunkCreators,
}
