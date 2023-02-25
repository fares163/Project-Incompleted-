import React from 'react'
import iconm from '../../assets/iconm.png'
import './Logo.css'
const Logo = () => {
  return (
   <div className='logo'>
   <a href='/' className='logo_href' />
    <img src={iconm} className='logo_img' />
   </div>
  )
}

export default Logo