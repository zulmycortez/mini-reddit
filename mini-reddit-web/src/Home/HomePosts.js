import React, { useState, useEffect } from 'react'
import axios from 'axios'
import mockPosts from './mockPosts'
import HomePostsStyle from './HomePostsStyle'

const HomePost = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8080/posts')
      .then(res => {
        setLoading(false)
        setPosts(res);
      })
      .catch(() => {
        setLoading(false)
        setPosts(mockPosts)
      })
  }, [])

  return (
    <HomePostsStyle>
      {loading && 'Loading...'}
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
