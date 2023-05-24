import React, { forwardRef } from 'react'
import TextTruncate from 'react-text-truncate';
import './style.css'
const Newscard = forwardRef(({ news }, ref) => {
    return (
      <div ref={ref} className="videoCard" key={news.id}>
      
     
        

            <div className='row'>
              <div className='card mt-4 mx-4 my-4' id='newscard-card'>
                    <div className='car-header d-flex '>
                        
                        
                    </div>
                    <div className='card-body'>
                    <a href={news.url}>  <p className='text-center text-primary'>{news.title}</p>
                        <img src={news.urlToImage} className='img-fluid' alt='news-pic'/>
                        </a>
                        <TextTruncate
                            line={1}
                            element='p'
                            truncateText="..."
        text={news.description}
      />                
                        <p className='text-start'>{news.publishedAt}</p>
                    </div>

                </div>
               

            </div>
      </div>
    );
  });

export default Newscard

