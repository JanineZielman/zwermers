import React from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'
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
                  {item.data.title} <br/>
                  <span>{item.data.category?.uid.replaceAll('-', ' ')}</span>
                </h2>
                <p>
                  {Moment(item.data.date).format("DD.MM.Y")}
                </p>
              </div>
            :
              <img src={item.data.image.url} />
            }
          </div>
          </a>
        )
      })}
    </div>
  )
 }
 
 export default ArchiefItem