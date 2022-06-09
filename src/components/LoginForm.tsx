import React, {FC, useState} from 'react';
import {Button, Card, Form, Input} from "antd";
import rules from "../utils/rules";
import {useDispatch} from "react-redux";
import {thunkCreators} from "src/store/reducers/auth/action-creators";
import {useTypedSelector} from "src/hooks/useTypedSelector";

const LoginForm: FC = () => {
   const dispatch = useDispatch();
   const {errorMessage, isLoading} = useTypedSelector(state => state.authReducer)

   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const submit = () => {
      dispatch(thunkCreators.login(username, password))
   }

   return (
      <Card>
         <Form
            name="basic"
            labelCol={{span: 10}}
            wrapperCol={{span: 16}}
            onFinish={submit}
         >
            <Form.Item
               label="Имя пользователя"
               name="username"
               rules={[rules.required('Пожалуйста введите имя!')]}
            >
               <Input
                  value={username}
                  onChange={(e) => setUsername(e.currentTarget.value)}
               />
            </Form.Item>

            <Form.Item
               label="Пароль"
               name="password"
               rules={[rules.required('Пожалуйста введите пароль!')]}
            >
               <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
               />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 10, span: 16}}>
               <Button type="primary" htmlType="submit" loading={isLoading}>
                  Login
               </Button>
            </Form.Item>
            {
               errorMessage && <div style={{color: "red"}}>{errorMessage}</div>
            }
         </Form>
      </Card>
   );
};

export default LoginForm;
