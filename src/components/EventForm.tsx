import React, {FC, useEffect, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import rules from "src/utils/rules";
import {IUser} from "src/models/IUser";
import {IEvent} from "src/models/IEvent";
import {Moment} from "moment";
import {formatDate} from "src/utils/formatDate";
import {useTypedSelector} from "src/hooks/useTypedSelector";

interface IEventFormProps {
   guests: IUser[]
   submitEventForm: (event: IEvent) => void
}

const EventForm: FC<IEventFormProps> = ({guests, submitEventForm}) => {
   const [event, setEvent] = useState({
      guest: '',
      date: '',
      description: '',
      author: '',
   } as IEvent)
   const {user} = useTypedSelector(state => state.authReducer)
   const selectDate = (date: Moment | null) => {
      if (date) {
         setEvent({...event, date: formatDate(date.toDate())})
      }
   }

   const submit = () => submitEventForm(event)
   useEffect(() => {
      setEvent({...event, author: user.username})
   }, [])

   return (
      <Form onFinish={submit}>
         <Form.Item
            label="Описание события"
            name="description"
            rules={[rules.required()]}
         >
            <Input
               value={event.description}
               onChange={e => setEvent({...event, description: e.currentTarget.value})}
            />
         </Form.Item>
         <Form.Item
            label="Дата"
            name="date"
            rules={[rules.required(), rules.isDateAfter('Нельзя создать событие в прошлом')]}
         >
            <DatePicker
               onChange={((date) => selectDate(date))}
            />
         </Form.Item>
         <Form.Item
            label="Гость"
            name="guest"
            rules={[rules.required()]}
         >
            <Select onChange={(guest: string) => setEvent({...event, guest})}>
               {guests.map(guest =>
                  <Select.Option value={guest.username} key={guest.username}>{guest.username}</Select.Option>
               )}
            </Select>
         </Form.Item>
         <Row justify={'center'}>
            <Form.Item>
               <Button type="primary" htmlType="submit">
                  Добавить
               </Button>
            </Form.Item>
         </Row>
      </Form>
   );
};

export default EventForm;
