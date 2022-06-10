import {
   EventsTypesActions,
   ISetEventsAction,
   ISetGuestsAction
} from "src/store/reducers/events/types";
import {IUser} from "src/models/IUser";
import {IEvent} from "src/models/IEvent";
import {AppDispatch} from "src/store/index";
import axios from "axios";

export const eventsActionCreators = {
   setGuests: (guests: IUser[]): ISetGuestsAction => ({
      type: EventsTypesActions.SET_GUESTS,
      payload: guests
   }),
   setEvents: (events: IEvent[]): ISetEventsAction => ({
      type: EventsTypesActions.SET_EVENTS,
      payload: events
   }),
}

export const eventsThunksCreators = {
   fetchGuests: () => async (dispatch: AppDispatch) => {
      try {
         const guests = await axios.get<IUser[]>('./users.json').then(res => res.data)
      } catch (e) {
         console.log(e)
      }
   }
}
