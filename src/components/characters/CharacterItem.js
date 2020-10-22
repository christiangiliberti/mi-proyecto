
import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nombre:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Sobrenombre:</strong> {item.nickname}
            </li>
            <li>
              <strong>Cumpleaños:</strong> {item.birthday}
            </li>
            <li>
              <strong>Estado:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
