import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = props => {
  const start = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokeList, setPokeList] = useState([])
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')
  const [page, setPage] = useState(start)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(page)
      setPokeList(data.results)
      setNext(data.next ? data.next : next)
      setPrev(data.previous ? data.previous : start)
    }
    getData()
  }, [page])

  return (
    <>
      <h2>Pokemon.js</h2>
      <ul>
        {pokeList.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
      <input type='button' value='Next' onClick={() => setPage(next)} />
      <input type='button' value='Prev' onClick={() => setPage(prev)} />
    </>
  )
}

export default Pokemon