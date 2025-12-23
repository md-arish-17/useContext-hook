import React, { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
    const userContext = useContext(UserContext)
  return (
    <div>
        {userContext.name}
    </div>
  )
}

export default ChildC