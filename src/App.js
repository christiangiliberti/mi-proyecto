import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './componentes/ui/Header'
import PersonajesGrilla from './componentes/personajes/PersonajesGrilla'
import Buscador from './componentes/ui/Buscador'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

useEffect(() => {
      const fetchItems = async () => {
      setIsLoading(true)
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(res.data)
      setIsLoading(false)
    }
    fetchItems()
  }, 
  [query])

return (
    <div className='container'>
      <Header />
      <Buscador getQuery={(q) => setQuery(q)} />
      <PersonajesGrilla isLoading={isLoading} items={items} />
    </div>
  )
}

export default App