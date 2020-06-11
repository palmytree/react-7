import React, { useState } from 'react'

const Counter = props => {
  const [count, setCount] = useState(0)
  const [edit, setEdit] = useState(false)
  return (
    <>
      <h1>{count}</h1>
      <h1>{edit ? 'true' : 'false'}</h1>
      <input type='button' value='Increment Count' onClick={() => setCount(count + 1)} />
      <input type='button' value='Toggle True/False' onClick={() => setEdit(!edit)} />
    </>
  )
}

export default Counter