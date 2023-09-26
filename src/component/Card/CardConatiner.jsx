import React from 'react'
import {Link} from "react-router-dom"

const CardConatiner = ({ Image, Title, Desc, productId }) => {
  return (
    <div className='card'>
      <img className='LadyImage' src={Image} alt='Lady' />
      <h3 className='CardHeading'>{Title}</h3>
      <p className='description'>{Desc}</p>
      <Link className='primary' to={`/product/${productId}`}>Find Out More</Link>
    </div>
  )
}

export default CardConatiner
