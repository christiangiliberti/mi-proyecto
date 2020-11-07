  
import React from 'react'
import cargando from '../../img/cargando.gif'

const Cargando = () => {
  return (
    <img
      src={cargando}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Cargando

