import React from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'
import Moment from "moment";

const AgendaItem = ({items}) => {
  return (
    <div className='agenda'>
      {items.map((item, i) => {
        return(
          <div className={`agenda-item ${item.data.category?.uid}`} key={`agenda${i}`}>
            <span className='category'>{item.data.category?.uid.replaceAll('-', ' ')}</span>
            <h2>{item.data.title}</h2>
            <p>
              {item.data.location}<br/>
              {Moment(item.data.date).format("DD.MM.Y")}
            </p>
          </div>
        )
      })}
    </div>
  )
 }
 
 export default AgendaItem