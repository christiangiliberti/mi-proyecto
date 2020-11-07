import React from 'react'
import PersonajesItem from './PersonajesItem'
import Cargando from '../ui/Cargando'

const PersonajesGrilla = ({ items, isLoading }) => {
  return isLoading ? (
    <Cargando />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <PersonajesItem key={item.char_id} item={item}></PersonajesItem>
      ))}
    </section>
  )
}

export default PersonajesGrilla