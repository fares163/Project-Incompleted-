import React from 'react'
import liv0 from '../../assets/liv0.png'
import liv1 from '../../assets/liv1.png'
import liv2 from '../../assets/liv2.png'
import liv3 from '../../assets/liv3.png'
import './Liv.css'

const Liv = () => {
  return (
    <div className='Containerty'>
        
        <span>
            <img src={liv0} className='image' />
        </span>
        <span>
            <img src={liv1} className='image' />
        </span>
        <span>
            <img src={liv2} className='image' />
        </span>
        <span>
            <img src={liv3} className='image' />
        </span>
        </div>
  )
}

export default Liv