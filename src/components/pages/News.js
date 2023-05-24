import React, { useEffect, useState } from 'react'
import Navbar2 from '../navbar/Navbar2'
import axios from 'axios'
import request from '../axios file/url'
import './style.css'
import Newscard from '../components/Newscard'




const News = () => {

// selected news
const [select,setselect]=useState([request.latest])


  //var for news 
  const [data,Setdata]=useState([])
 

  useEffect(()=>{
    const fetchdata = async()=>{
      const request= await  axios.get(select)
      Setdata(request.data.articles)
      return request;

    };
    fetchdata();
   

  },[select])
  //fetch data


console.log(data)


  return (
    <div>
        <Navbar2/>
        <div className='row'>
           <div className='col-3' id='news_navbar_box'>
           

                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.latest)}> Latest</h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.entertainment)}>Entertainment </h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.general)}> General</h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.health)}> Health</h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.movies)}>movies</h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.Article)}>Article</h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.science)}>Science</h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.technology)}> Technology</h2>
                  <h2 className='text-center mx-4 my-4' id='news_navbar_box_item' onClick={()=>setselect(request.sports)}>Sports</h2>

            

           </div>
           <div className='col' >
           <div className='row' id='news-2-col'>
           {data.map((news) => (
          
          <Newscard key={news.id} news={news}/>

        
        ))}
           </div>
           </div>
        </div>
      
    </div>
  )
}

export default News
