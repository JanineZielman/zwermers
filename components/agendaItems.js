import React from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'
import Moment from "moment";

const AgendaItem = ({items}) => {
  return (
    <div className='agenda'>
      {items.map((item, i) => {
        return(
          <a href={`/kalender/${item.uid}`} className={`agenda-item ${item.data.category?.uid}`} key={`agenda${i}`}>
            {/* <span className='category'>{item.data.category?.uid.replaceAll('-', ' ')}</span> */}
            <div className='mask'>
              <h2>{item.data.title}</h2>
              <p>
                {item.data.location}<br/>
                {Moment(item.data.date).format("DD.MM.Y")}
              </p>
            </div>
            
          </a>
        )
      })}
    </div>
  )
 }
 
 export default AgendaItem