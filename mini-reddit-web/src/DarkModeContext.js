import React, { useState } from 'react'

const DarkModeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {}
})

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode)
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  )
}

export  { DarkModeProvider, DarkModeContext }
