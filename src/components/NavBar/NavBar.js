import React from "react"
import {useHistory} from 'react-router';

const NavBar = props => {
  const { routes } = props
  const history = useHistory()

  return (
    <div>
      {routes.map((route, index) =>(
        <div key={ index } onClick={()=>history.push(route.path)}>
          { route.view }
        </div>
      ))}
    </div>
  )
}

export default NavBar
