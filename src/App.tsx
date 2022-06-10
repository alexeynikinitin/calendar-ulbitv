import React, {useLayoutEffect} from 'react';
import './App.css';
import AppRouter from "src/components/AppRouter";
import NavBar from "src/components/NavBar";
import {Layout} from "antd";
import {useAction} from "src/hooks/useAction";
import {IUser} from "src/models/IUser";

function App() {
   const {setIsAuth, setUser} = useAction()

   useLayoutEffect(() => {
      if (localStorage.getItem('auth')) {
         setUser({username: localStorage.getItem('username') || ''} as IUser)
         setIsAuth(true)
      }
   }, [])

   return (
      <Layout.Content>
         <NavBar/>
         <AppRouter/>
      </Layout.Content>
   );
}

export default App;
