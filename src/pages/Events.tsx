import React, {FC, useState} from 'react';
import EventCalendar from "src/components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "src/components/EventForm";

const Events: FC = () => {
   const [visibleModal, setVisibleModal] = useState(false)
   return (
      <Layout>
         <EventCalendar events={[]}/>
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
            <EventForm />
         </Modal>
      </Layout>
   );
};

export default Events;
