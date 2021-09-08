import Login from './views/Login';
import './App.sass';
import React from 'react';
import { getXsrf } from './localStorage';

import { renderRoutes } from "react-router-config";
import {Redirect} from 'react-router';

const App = props => {
  const { route, history } = props
  console.log(getXsrf());
  return (
      getXsrf() ?
      <div className="app">
        <div className="index-header">
          <div className="index-header__logo">
            LOGO
          </div>
          <div className="index-header__shortcut">
            <div className="pointer" onClick={()=>history.push('./home')}>
              首頁
            </div>
            <div className="pointer" onClick={()=>history.push('./news')}>
              最新消息
            </div>
          </div>
        </div>
        <div className="m-top__24 m-left__32">
          {renderRoutes(route.routes)}
        </div>
      </div> :
      <Redirect to="/login" />
  );
}

export default App;
