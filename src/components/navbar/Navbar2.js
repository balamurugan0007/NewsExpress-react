import { useState } from 'react'
import React from 'react'
import './style.css'
//import { API_KEY } from '../axios file/url'

const Navbar2 = () => {



  //search news
const [search , Setsearch]=useState([])
 const handlechange=(e)=>{
  
    Setsearch(e.target.value)
  
  }

const searchNews =()=>{
 console.log(search)
   // search news url        https://newsapi.org/v2/everything?q=sports&apiKey=403e939800a7478f897b03f8cb6a60c8
//const searchNewsTopics=`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
//console.log(searchNewsTopics)
}


  return (
    <div className='container-fluid' id='navbar2'>
      <div className=' d-flex justify-content-between' id='navbar2-items'>
          <h2 className='mx-4 '>
            NewsExpress
          </h2>
          <form className='form d-flex'>
            <input className='form-control mx-2 my-2' placeholder='Search' type='text' onChange={handlechange}/>
            <button className='btn mx-2 my-2' onClick={searchNews()}>Search</button>
          </form>
      </div>
    </div>
  )
}

export default Navbar2 
