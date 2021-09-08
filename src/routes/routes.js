import React from 'react';

import { Redirect } from "react-router";

import App from '../App';
import Login from '../views/Login';
import Register from '../views/Register';
import HomePage from '../views/HomePage';
import News from '../views/News';
import NotFound from '../NotFound';

const routes = [
  {
    path: "/login",
    exact: true,
    component: Login
  },
  {
    path: "/register",
    exact: true,
    component: Register
  },
  {
    path: "/404",
    exact: true,
    component: NotFound
  },
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/home",
        exact: true,
        component: HomePage
      },
      {
        path: "/news",
        exact: true,
        component: News
      },
      {
        path: "/",
        component: () => <Redirect to="/404" />,
      }
    ]
  }
]

export default routes;