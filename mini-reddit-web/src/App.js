import React from 'react'
import Home from './Home/Home'
import Header from './Header/Header'
import { DarkModeProvider } from './DarkModeContext'
import AppStyle from './AppStyle'

const App = () => {
  return (
    <DarkModeProvider>
      <AppStyle>
        <Header />
        <Home />
      </AppStyle>
    </DarkModeProvider>
  )
}

export default App;
