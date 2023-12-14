import React from 'react';
import Moment from "moment";

const ArchiefItem = ({items}) => {
  return (
    <div className='archief'>
      {items.map((item, i) => {
        return(
          <a href={`zwermers/${item.uid}`} key={`archief${i}`}>
          <div className={`archief-item ${item.data.category?.uid}`}>
            {item.data.category?.uid == 'news' ?
              <div className="news-item">
                <h2>
                  <span>{item.data.category?.uid.replaceAll('-', ' ')}</span><br/>
                  {item.data.title}
                  
                </h2>
                <p>
                  {item.data.date && Moment(item.data.date).format("DD.MM.Y")}
                </p>
              </div>
            :
              <>
                
                {item.data.image.url ?
                  <>
                    <img src={item.data.image.url} />
                    <div className='overlay'>
                      <h2>
                        <span>{item.data.category?.uid.replaceAll('-', ' ')}</span><br/>
                        {item.data.title}
                      </h2>
                    </div>
                  </>
                  :
                  <div className='no-img'>
                    <h2>
                      <span>{item.data.category?.uid.replaceAll('-', ' ')}</span><br/>
                      {item.data.title}
                    </h2>
                  </div>
                }
              </>
            }
          </div>
          </a>
        )
      })}
    </div>
  )
 }
 
 export default ArchiefItem