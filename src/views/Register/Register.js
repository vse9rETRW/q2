import React, {useState} from 'react';
import InputItem from '../../components/InputItem';

import './register.sass'
import { useHistory } from 'react-router';
import { user as api } from '../../api/user';

import Modal from '../../common/modal/modal';

const Register = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleRegister = async () => {
    console.log('password',password);
    const {data:{
      success,
      message
    }} = await api.register({
      username: username,
      password: password
    })

    console.log('res', success);

    if( success ){
      Modal("註冊成功")
      history.push('./login')
    } else {

    }
    // console.log('res', res)
  }
  // Modal("註冊成功")
  return (
      <div className="register center">
        <div className="register__content flex flex--column a-center">
          <div className="register__title">註冊</div>
          <InputItem className="m-top__40" star={true} onChange={setUsername} label="帳號"/>
          <InputItem className="m-top__40" star={true} onChange={setPassword} label="密碼"/>
          <InputItem className="m-top__40" star={true} onChange={setConfirm} label="確認密碼"/>
          <div className="login__register m-top__40" onClick={()=>history.push("/login")}>
            返回登入
          </div>
          <div className="button button__primary m-top__32" onClick={()=>handleRegister()}>註冊</div>
        </div>
      </div>
  )
}

export default Register