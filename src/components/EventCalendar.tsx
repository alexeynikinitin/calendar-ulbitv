import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "src/models/IEvent";

interface IEventCalendarProps {
   events: IEvent[]
}

const EventCalendar: FC<IEventCalendarProps> = () => {
   return (
      <Calendar/>
   );
};

export default EventCalendar;
