import React, {FC} from 'react';
import {Layout, Row} from "antd";
import "../App.css"
import LoginForm from "src/components/LoginForm";

const Login: FC = () => {
   return (
      <Layout>
         <Row justify='center' align='middle' className='h100'>
            <LoginForm />
         </Row>
      </Layout>
   );
};

export default Login;
