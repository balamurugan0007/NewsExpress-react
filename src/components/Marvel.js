import React from 'react'
import  axios from 'axios'

const Marvel = () => {
   axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=403e939800a7478f897b03f8cb6a60c8')
  .then(function (response) {
    // handle success
    //console.log(response);
    const data=response.data

    console.log(data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
   
       

  return (
    <div>
      <h2 className='text-center text-danger'>hello</h2> 
    </div>
  )
}

export default Marvel
