import React, { useState } from 'react'

const MovieList = props => {
  const [movies, setMovies] = useState([
    'The Little Giants',
    'Cool Runnings',
    'Matilda'
  ])
  const [input, setInput] = useState('')

  return (
    <>
      <h2>Movie List</h2>
      {movies.map((m, i) => {
        return <h3 key={i}>{m}</h3>
      })}
      <input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='Add movie'
      />
      <input
        type='button'
        value='Add to list'
        onClick={() => {
          setMovies([...movies, input])
          setInput('')
        }}
      />
    </>
  )
}

export default MovieList
