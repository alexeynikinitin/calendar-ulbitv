import {
   authActionCreators,
   authThunkCreators
} from "./auth/action-creators";
import {
   eventsActionCreators,
   eventsThunksCreators
} from "src/store/reducers/events/action-creators";

export const allActionCreators = {
   ...authActionCreators, ...authThunkCreators,
   ...eventsActionCreators, ...eventsThunksCreators,
}
