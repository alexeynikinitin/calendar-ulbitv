import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "src/models/IEvent";
import {Moment} from "moment";
import {formatDate} from "src/utils/formatDate";

interface IEventCalendarProps {
   events: IEvent[]
}

const EventCalendar: FC<IEventCalendarProps> = ({events}) => {

   const dateCellRender = (date: Moment) => {
      const formattedData = formatDate(date.toDate())
      const filteredEvents = events.filter(ev => ev.date === formattedData)
      return (
         <ul className="events">
            {filteredEvents.map((ev, i) => (
               <li key={i}>
                  {ev.description}
               </li>
            ))}
         </ul>
      );
   };

   return (
      <Calendar dateCellRender={dateCellRender}/>
   );
};

export default EventCalendar;
