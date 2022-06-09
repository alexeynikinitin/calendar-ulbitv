import React, {FC} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "src/route/index";
import {useTypedSelector} from "src/hooks/useTypedSelector";

const AppRouter: FC = () => {
   const {isAuth} = useTypedSelector(state => state.authReducer)

   return (
      <div>
         {
            isAuth
               ?
               <Switch>
                  {privateRoutes.map(({path, component, exact}) =>
                     <Route path={path} component={component} exact={exact} key={path} />
                  )}
                  <Redirect to={RouteNames.EVENTS}/>
               </Switch>
               :
               <Switch>
                  {publicRoutes.map(({path, component, exact}) =>
                     <Route path={path} component={component} exact={exact} key={path} />
                  )}
                  <Redirect to={RouteNames.LOGIN}/>
               </Switch>
         }
      </div>
   );
};

export default AppRouter;
