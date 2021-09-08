import React, {useState} from 'react';

import { user as api } from "../../api";
import { setXsrf } from '../../localStorage';

import InputItem from '../../components/InputItem';
import { useHistory } from "react-router";
import Modal from '../../common/modal/modal';

import './login.sass'

const Login = props => {
  const history = useHistory();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const {data:{
        success,
        token,
        message
      }} = await api.login({
        username: username,
        password: password,
      });
      if( success ){
        Modal("登入成功")
        setXsrf(token)
        history.push('./home')
      }
    } catch (e) {

    }
  };


  return (
      <div className="login center">
        <div className="login__content flex flex--column a-center">
          <div className="login__title">登入</div>
          <InputItem className="m-top__56" onChange={setUsername} label="帳號"/>
          <InputItem className="m-top__40" onChange={setPassword} type="password" label="密碼"/>
          <div className="login__register m-top__40" onClick={()=>history.push("/register")}>
            註冊
          </div>
          <div className="button button__primary m-top__32" onClick={handleLogin}>登入</div>
        </div>
      </div>
  )
}

export default Login