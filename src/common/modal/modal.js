import React, {useEffect} from 'react';
import ReactDOM from 'react-dom'
import './style.sass'
// import success from './success';

export const modalRoot = document.getElementById('modal-root')

const ref = React.createRef()

const Modal = message => {
  console.log('modalRoot', modalRoot);

  // useEffect(()=>{
  //   console.log('ref', ref);
  // },[ref])

  setTimeout(()=>[
    close()
  ], 3000)
  const close = () => {
    ref.current.classList.add('modal.fade.out')
    setTimeout(()=>{
      ReactDOM.unmountComponentAtNode(modalRoot)
    }, 150)
  }

  ReactDOM.render(
    <div className="modal-mask">
      <div className="modal-content" ref={ref}>
        <div className="modal-success center">
          {message}
        </div>
      </div>
    </div>,
    modalRoot
  )

  // return { close }
}



// modal.success = success

export default Modal
