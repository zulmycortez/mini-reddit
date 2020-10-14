import React from 'react'
import Post from './Post'

const HomeHeader = ({ children }) => (
  <h3>
    {children}
  </h3>
)

const Home = () => {
  return (
    <div>
      <HomeHeader>
        Mini Reddit
      </HomeHeader>
      <Post />
    </div>
  )
}

export default Home
