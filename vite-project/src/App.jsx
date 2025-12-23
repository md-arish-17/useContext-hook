import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'


  const UserContext = createContext()

const App = () => {

  const [user, setUser] = useState({name:"arish",age:22})

  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </div>
  )
}
export {UserContext}
export default App
