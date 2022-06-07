import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "src/route/index";

const NavBar: FC = () => {
   const router = useHistory();

   const auth = false
   return (
      <Layout.Header>
         <Row justify={"end"}>
            <Menu
               theme="dark"
               mode="horizontal"
               selectable={false}
            >
               {
                  auth
                     ?
                     <>
                        <div style={{color: "white"}}>Алексей</div>
                        <Menu.Item
                           onClick={() => console.log('Выйти')}
                           key={1}
                        >
                           Выйти
                        </Menu.Item>
                     </>
                     :
                     <>
                        <div style={{color: "white"}}>Календарь</div>
                        <Menu.Item
                           onClick={() => router.push(RouteNames.EVENTS)}
                           key={1}
                        >
                           Логин
                        </Menu.Item>
                     </>
               }
            </Menu>
         </Row>
      </Layout.Header>
   );
};

export default NavBar;
