import React from 'react';
import './App.css';
import AppRouter from "src/components/AppRouter";
import NavBar from "src/components/NavBar";
import {Layout} from "antd";

function App() {
   return (
      <Layout.Content>
         <NavBar/>
         <AppRouter/>
      </Layout.Content>
   );
}

export default App;
