import {
   EventsTypesActions, ISetEventsAction,
   ISetGuestsAction
} from "src/store/reducers/events/types";
import {IUser} from "src/models/IUser";
import {IEvent} from "src/models/IEvent";
import {AppDispatch} from "src/store/index";
import UserService from "src/api/UserService";

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
         const guests = await UserService.getUsers()
         dispatch(eventsActionCreators.setGuests(guests))
      } catch (e) {
         console.log(e)
      }
   },
   fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
      try {
         const events = localStorage.getItem('events') || '[]'
         const json = JSON.parse(events) as IEvent[]
         const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
         dispatch(eventsActionCreators.setEvents(currentUserEvents))
      } catch (e) {
         console.log(e)
      }
   },
   createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
      try {
         const events = localStorage.getItem('events') || '[]'
         const json = JSON.parse(events) as IEvent[]
         json.push(event)
         localStorage.setItem('events', JSON.stringify(json))
         dispatch(eventsActionCreators.setEvents(json))
      } catch (e) {
         console.log(e)
      }
   }
}
