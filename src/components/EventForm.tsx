import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Layout, Row, Select} from "antd";
import rules from "src/utils/rules";

const EventForm: FC = () => {
   return (
      <Form>
         <Form.Item
            label="Описание события"
            name="description"
            rules={[rules.required()]}
         >
            <Input/>
         </Form.Item>
         <Form.Item
            label="Дата"
            name="date"
            rules={[rules.required()]}
         >
            <DatePicker/>
         </Form.Item>
         <Form.Item
            label="Гость"
            name="guest"
            rules={[rules.required()]}
         >
            <Select>
               <Select.Option value="jack">Jack</Select.Option>
               <Select.Option value="lucy">Lucy</Select.Option>
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
