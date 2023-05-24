import React from 'react'

const Feedback = () => {
  return (
    <div className='container'>
        <h2 className='text-center mt-4' id='feedback-heading'>Feedback</h2>
        <div className='form'>
            <div className='container'>
            <div className='row mt-4 my-2 '>
                <input className='form-control' placeholder='username' type='text'/>
            </div>
            <div className='row mt-4 my-2'>
                <input className='form-control' placeholder='Ratings' type='number'/>
            </div>
            <div className='row mt-4 my-2'>
                <input className='form-control' placeholder='Feedback about NewsExpress' type='text'/>
            </div>
            <div className='row mt-4 my-2 '>
                <button className='btn btn-success'>Submit</button>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Feedback
