import React from 'react'
import { Icon, Search, Signup, Profile } from './index.js'
import HeaderStyle from './HeaderStyle'

const Header = () => {
  return (
    <HeaderStyle>
      <Icon />
      <Search />
      <Signup />
      <Profile />
    </HeaderStyle>
  )
}

export default Header
