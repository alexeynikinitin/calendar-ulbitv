import {
   EventsActions,
   EventsTypesActions,
   IEventState
} from "src/store/reducers/events/types";

const initialState: IEventState = {
   guests: [],
   events: []
}

export default function (state = initialState, action: EventsActions): IEventState {
   switch (action.type) {
      case EventsTypesActions.SET_EVENTS:
         return {...state, events: action.payload}
      case EventsTypesActions.SET_GUESTS:
         return {...state, guests: action.payload}
      default: return state
   }
}
