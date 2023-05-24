import React from 'react'
import movie from '../images/movie.jpg'
import ronaldo from '../images/ronaldo.jpg'

import './style.css'
const Home = () => {
  return (
    <div className='container mt-4'>
        <h2 className='text-start text-danger mt-4'>Trending News</h2>
        <div className='row mt-4'>
            <div className='col-5 mx-2 my-2' id='home-card1'>
                <img src={ronaldo} alt='pic' className='img-fluid'/>
               
            </div>
            <div className='col'>
                <div className='row'>
                    <div className='card mx-2 my-2' id='home-card2' >
                       <img src={movie} alt='pic' className='img-fluid'/>
                    </div>
                    <div className='card mx-2 my-2' id='home-card3' >
                    <img src={ronaldo} alt='pic' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
