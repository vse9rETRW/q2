import React, {useState} from 'react';

// import SvgVisible from "./image/visible.svg"
import { ReactComponent as SvgVisible } from "./image/visible.svg";
import { ReactComponent as SvgInvisible } from "./image/invisible.svg";

import './input.sass'

const InputItem = props => {
  const { label, className, value, onChange, type, star= false } = props
  const [hide, setHide] = useState(true)

  const handleSetHide = () => {
    setHide(prevState => {
      return !prevState
    })
  }

  return (
      <div className={`input-item${' ' + className}`}>
        <div className="input-item__label">
          {star && <span className="input-item__label--star">*</span>}
          { label }
        </div>
        <div className="input-wrap">
          <input type={type==='password' && hide ? 'password' : 'text'} onChange={e=>onChange(e.target.value)}/>
          {
            type==='password' && (
                hide ? <SvgVisible className="pointer" onClick={handleSetHide}/> : <SvgInvisible className="pointer" onClick={handleSetHide} />
            )
          }
        </div>
      </div>
  )
}

export default InputItem