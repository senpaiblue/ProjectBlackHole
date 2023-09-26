import React from 'react'
import lady from "../../assets/lady.png"
import { Link } from 'react-router-dom'
import "./card.css"
import CardConatiner from './CardConatiner'

const card = () => {

  const cardArray = [
    {
      Image: lady,
      Title: 'Lorem ipsum',
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      Image: lady,
      Title: 'Lorem ipsum',
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      Image: lady,
      Title: 'Lorem ipsum',
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      Image: lady,
      Title: 'Lorem ipsum',
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      Image: lady,
      Title: 'Lorem ipsum',
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      Image: lady,
      Title: 'Lorem ipsum',
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]
  return (
    <div className='CardContainer'>{
      cardArray &&  cardArray.map((item,index) =>{
        return(
          <CardConatiner 
          key={index}
          Image={item.Image}
          Title={item.Title}
          Desc={item.Description}
          productId={index}
          />
        
          )} )
    }
    </div>
  )
}

export default card
