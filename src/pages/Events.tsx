import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "src/components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "src/components/EventForm";
import {useAction} from "src/hooks/useAction";
import {useTypedSelector} from "src/hooks/useTypedSelector";
import {IEvent} from "src/models/IEvent";

const Events: FC = () => {
   const [visibleModal, setVisibleModal] = useState(false)
   const {fetchGuests, createEvent, fetchEvents} = useAction()
   const {guests, events} = useTypedSelector(state => state.eventsReducer)
   const {user} = useTypedSelector(state => state.authReducer)

   const submitEventForm = (event: IEvent) => {
      createEvent(event)
      setVisibleModal(false)
   }

   useEffect(() => {
      fetchGuests()
      fetchEvents(user.username)
   }, [])

   return (
      <Layout>
         <EventCalendar events={events}/>
         <Row justify={'center'}>
            <Button
               onClick={() => setVisibleModal(true)}
            >
               {"Добавить событие"}
            </Button>
         </Row>
         <Modal
            title="Добавить событие"
            footer={false}
            visible={visibleModal}
            onCancel={() => setVisibleModal(false)}
         >
            <EventForm
               guests={guests}
               submitEventForm={submitEventForm}
            />
         </Modal>
      </Layout>
   );
};

export default Events;
