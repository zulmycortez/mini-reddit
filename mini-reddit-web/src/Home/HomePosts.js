import React, { useState, useEffect } from 'react'
import axios from 'axios'
import mockPosts from './mockPosts'
import HomePostsStyle from './HomePostsStyle'

const HomePost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then(res => { setPosts(res) })
      .catch(() => { setPosts(mockPosts) })
  })

  console.log(posts)
  return (
    <HomePostsStyle>
      {posts.map(item => (
        <div 
          key={item.id}
          className="post"
        >
          <div>{item.title}</div>
        </div>
      ))}
    </HomePostsStyle>
  )
}

export default HomePost
