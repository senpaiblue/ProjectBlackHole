import React from 'react'
import "./Hero.css"
import purplehole from "../../assets/purplehole.png"

const Hero = () => {
  console.log('Hero component rendered')
  return (
    <div className='MainContainer'>
      <img className="Hole" src={purplehole} alt='Purple Hole' />
      <div className='sub'>
        <h5 className='integration'>New:Our AI Integration just landed</h5>
        <h1 className="think">Be Ready To Be Absorbe Init</h1>
        <h3 className='small'>Never miss a note,idea or connection </h3>
      </div>
    </div>
  )
}

export default Hero
