import React from 'react'

const PersonajesItem = ({ item }) => {
  return (
    <div className='card'>
      <div>
          <img src={item.img} alt='' />
        </div>
          <h1>{item.name}</h1>
          <ul>
            <li>
              Nombre: {item.portrayed}
            </li>
            <li>
              Sobrenombre: {item.nickname}
            </li>
            <li>
              Cumpleaños: {item.birthday}
            </li>
            <li>
              Estado: {item.status}
            </li>
          </ul>
        </div>
  )
}

export default PersonajesItem
