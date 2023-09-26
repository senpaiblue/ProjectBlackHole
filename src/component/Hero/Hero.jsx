import React from 'react'
import "./Hero.css"
import BH3 from "../../assets/BH3.mp4"

const Hero = () => {
  console.log('Hero component rendered')
  return (
    <div className='MainContainer'>
      <video className="Hole" src={BH3} type='video/mp4' controls />
        <h1 className="think">Be Ready To Be Absorbe Init</h1>
      <div className='sub'>
        <h3 className='small'>Never miss a note,idea or connection </h3>
        <h5 className='integration'>New:Our AI Integration just landed</h5>
      </div>
    </div>
  )
}

export default Hero
