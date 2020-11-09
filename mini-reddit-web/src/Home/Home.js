import React, { useContext } from 'react'
import HomePosts from './HomePosts'
import { DarkModeContext } from '../DarkModeContext'
import HomeStyle from './HomeStyle'

const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <HomeStyle darkMode={darkMode}>
      <button onClick={toggleDarkMode}>
        Change to {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <HomePosts />
    </HomeStyle>
  )
}

export default Home
