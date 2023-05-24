import React from 'react'
import './style.css'

const Navbar1 = () => {
  return (
    <div className='container'>
       
      <div className='nav' id='navbar1'>
        <h2 id='navbar1-brand'>News<span>Express</span></h2>
        <ul id='navbar1-ul'>
          <li><a className='mx-2' href='/'>Home</a></li>
          <li><a className='mx-2' href="/News">News</a></li>
        
          <li><a className='mx-2' href='/about'>About</a></li>
          <li><a className='mx-2' href='/contact'>Contact</a></li>
        </ul>
       
        

      </div>
        
    </div>
  )
}

export default Navbar1
