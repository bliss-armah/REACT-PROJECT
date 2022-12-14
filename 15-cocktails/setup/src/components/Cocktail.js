import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name,image,info,glass}) => {
  return (
    <article className='cocktail'>
      <div className="img-container"><img src={image} alt={name} /></div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
      </div>
    </article>
  )
}

export default Cocktail
