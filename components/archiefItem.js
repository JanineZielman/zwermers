import React from 'react';
import Moment from "moment";

const ArchiefItem = ({items, locale}) => {
  return (
    <div className='archief'>
      {items.map((item, i) => {
        return(
          <a className={`archief-item ${item.data.category?.uid}`} href={`/${locale}/zwermers/${item.uid}`} key={`archief${i}`}>
              {item.data.category?.uid == 'news' ?
                <div className="news-item">
                  <h2>
                    <span>{item.data.category?.data.title}</span><br/>
                    {item.data.title}
                    
                  </h2>
                  <p>
                    {item.data.dates && item.data.dates}
                  </p>
                </div>
              :
                <>
                  
                  {item.data.image.url ?
                    <>
                      <div className="img">
                        <img src={item.data.image.url} />
                      </div>
                      <div className='overlay'>
                        <h2>
                          <span>{item.data.category?.data.title}</span><br/>
                          {item.data.title}
                        </h2>
                      </div>
                    </>
                    :
                    <div className='no-img'>
                      <h2>
                        <span>{item.data.category?.data.title}</span><br/>
                        {item.data.title}
                      </h2>
                    </div>
                  }
                </>
              }
          </a>
        )
      })}
    </div>
  )
 }
 
 export default ArchiefItem