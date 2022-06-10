import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "src/route/index";
import {useTypedSelector} from "src/hooks/useTypedSelector";
import {useAction} from "src/hooks/useAction";

const NavBar: FC = () => {
   const router = useHistory();
   const {logout} = useAction();
   const {isAuth, user} = useTypedSelector(state => state.authReducer)

   return (
      <Layout.Header>
         <Row justify={"end"}>
            <Menu
               theme="dark"
               mode="horizontal"
               selectable={false}
            >
               {
                  isAuth
                     ?
                     <>
                        <div style={{color: "white"}}>{user.username}</div>
                        <Menu.Item
                           onClick={logout}
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
