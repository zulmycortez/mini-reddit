import React, { useState } from 'react'

const Search = () => {
  const [value, setValue] = useState('')

  return (
    <div>
      <input
        value={value}
        onChange={e => { setValue(e.target.value) } }
        placeholder="Search"
      />
    </div>
  )
}

export default Search
