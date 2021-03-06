import React, { useState } from 'react'
import styled from 'styled-components'

const PostStyle = styled.div`
  text-align: left;
  padding: 1rem;
`

const PostHeader = ({ children }) => (
  <h3>
    {children}
  </h3>
)

const PostLabel = ({ children }) => (
  <h5>
    {children}
  </h5>
)

const initialValues = {
  title: '',
  body: ''
}

const Post = () => {
  const [values, setValues] = useState(initialValues)

  const onChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <PostStyle>
      <PostHeader>
        Post
      </PostHeader>
      <div>
        <PostLabel>
          Title
        </PostLabel>
        <input
          value={values.title}
          name="title"
          onChange={onChange}
        />
      </div>
      <PostLabel>
        Description  
      </PostLabel>
      <textarea
        value={values.body}
        name="body"
        onChange={onChange}
      />
      <div>
        <button onClick={() => { console.log(values) }}>
          Submit
        </button>
      </div>
    </PostStyle>
  )
}

export default Post