import {IEvent} from "src/models/IEvent";
import {IUser} from "src/models/IUser";

export interface IEventState {
   guests: IUser[]
   events: IEvent[]
}

export enum EventsTypesActions {
   SET_GUESTS = 'SET_GUESTS',
   SET_EVENTS = 'SET_EVENTS',
}

export interface ISetGuestsAction {
   type: EventsTypesActions.SET_GUESTS,
   payload: IUser[]
}

export interface ISetEventsAction {
   type: EventsTypesActions.SET_EVENTS,
   payload: IEvent[]
}

export type EventsActions =
   | ISetGuestsAction
   | ISetEventsAction
