"use client"
import React from 'react';
import { PrismicImage } from '@prismicio/react'

const ArchiefItem = ({items}) => {
  return (
    <div className='archief'>
      {items.map((item, i) => {
        return(
          <div className={`archief-item ${item.data.size}`}>
            {item.data.orientation == 'Landscape' ?
              <PrismicImage field={item.data.image.landscape} />
            :
              <PrismicImage field={item.data.image} />
            }
          </div>
        )
      })}
    </div>
  )
 }
 
 export default ArchiefItem