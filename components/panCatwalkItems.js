import React from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'

const PanCatwalkItems = ({items, page}) => {
  console.log(page.uid)
  return (
    <div className='pan-catwalk-items'>
      {items.map((item, i) => {
        let list = [];
        for (let i = 0; i < item.data.labels.length; i++) {
          list += "fold" + i + " ";
        }
        return(
          <div key={`pci${i}`} className={`pan-catwalk-item`}>
            <div className={`item-wrapper ${list}`}>
              <PrismicImage field={item.data.image} className={`${list}`}/>
            </div>
            {item.data.labels.map((label, j) => {
              return(
                <a key={`label${j}`} className={`label label${j} ${page.uid == label.label.uid && 'visible'}`} href={`/pan-catwalk/${label.label.uid}`}>
                </a>
              )
            })}
          </div>
        )
      })}
    </div>
  )
 }
 
 export default PanCatwalkItems