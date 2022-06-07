import React from "react";
import Login from "../pages/Login";
import Events from "../pages/Events";

interface IRoute {
   path: string
   component: React.ComponentType
   exact?: boolean
}

export enum RouteNames {
   LOGIN = '/login',
   EVENTS = '/events',
}

export const publicRoutes: IRoute[] = [
   {path: RouteNames.LOGIN, component: Login, exact: true}
]

export const privateRoutes: IRoute[] = [
   {path: RouteNames.EVENTS, component: Events, exact: true}
]
