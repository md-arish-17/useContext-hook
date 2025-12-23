import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'
import "./App.css"

  const ThemeContext = createContext()

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div className='container' style={{backgroundColor:theme==="light"?"beige":"black"}}>
      <ThemeContext.Provider value={[theme,setTheme]}>
        <ChildA/>
      </ThemeContext.Provider>
    </div>
  )
}
export {ThemeContext}
export default App
