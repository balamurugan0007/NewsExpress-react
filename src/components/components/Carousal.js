
import breaknews from '../images/breaking.jpg'
import movie from '../images/movie.jpg'
import sports from '../images/sports.jpg'

import './style.css'

import React from 'react'

const Carousal = () => {
  return (
    <div className='container' id='carosal'>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 h-60" src={breaknews} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={sports} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={movie} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    
  </a>
</div>
      
    </div>
  )
}

export default Carousal

