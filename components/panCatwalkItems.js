import React from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'

const PanCatwalkItems = ({items, page}) => {
  return (
    <div className='pan-catwalk-items'>
      {items.map((item, i) => {
        return(
          <div key={`pci${i}`} className={`pan-catwalk-item`}>
            {item.data.labels.map((label, j) => {
                return(
                  <a key={`label${j}`} className={`label label${j} ${page.uid == label.label.uid && 'visible'}`} href={`/pan-catwalk/${label.label.uid}`}>
                    {label.label.uid}<br></br>
                  </a>
                )
              })}
            <div className={`item-wrapper`}>
              <PrismicImage field={item.data.image}/>
              
            </div>
            
          </div>
        )
      })}
    </div>
  )
 }
 
 export default PanCatwalkItems