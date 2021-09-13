import React from 'react';

import { Redirect } from 'react-router';

import App from '../App';
import Login from '../views/Login';
import Register from '../views/Register';
import HomePage from '../views/HomePage';
import Account from '../views/Account/Account';
import Member from '../views/Member';
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
        path: "/account",
        exact: true,
        component: Account,
        view:
            <div>
              <div>
                個人資訊管理
              </div>
              <div className="pointer">
                帳戶設定
              </div>
            </div>
      },
      {
        path: "/member",
        exact: true,
        component: Member,
        view:
            <div className="pointer">
              <div>
                會員管理
              </div>
            </div>
      },
      {
        path: "/",
        component: () => <Redirect to="/404" />,
      }
    ]
  }
]

export default routes;
