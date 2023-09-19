"use client"
import React from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'

const ArchiefItem = ({items}) => {
  return (
    <div className='archief'>
      {items.map((item, i) => {
        console.log(item)
        return(
          <a href={`zwermers/${item.uid}`}>
          <div className={`archief-item ${item.data.size} ${item.data.category}`}>
            {/* <span className='category'>{item.data.category.uid.replaceAll('-', ' ')}</span> */}
            {item.data.orientation == 'Landscape' ?
              <PrismicImage field={item.data.image.landscape} />
            :
              <PrismicImage field={item.data.image} />
            }
          </div>
          </a>
        )
      })}
    </div>
  )
 }
 
 export default ArchiefItem