import './App.sass';
import React from 'react';
import { getXsrf } from './localStorage';

import { renderRoutes } from "react-router-config";
import {Redirect} from 'react-router';

import NavBar from './components/NavBar';

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
        <div className="flex index-content">
          <div className="index-content__right-side">
            <NavBar routes={route.routes} />
          </div>
          <div>
            {renderRoutes(route.routes)}
          </div>
        </div>
      </div> :
      <Redirect to="/login" />
  );
}

export default App;
