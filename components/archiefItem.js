import React from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'

const ArchiefItem = ({items}) => {
  return (
    <div className='archief'>
      {items.map((item, i) => {
        return(
          <a href={`zwermers/${item.uid}`} key={`archief${i}`}>
          <div className={`archief-item ${item.data.category?.uid}`}>
            {/* <span className='category'>{item.data.category?.uid.replaceAll('-', ' ')}</span> */}
            <img src={item.data.image.url} />
          </div>
          </a>
        )
      })}
    </div>
  )
 }
 
 export default ArchiefItem