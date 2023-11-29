import React, { useState, useEffect } from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react';

const PanCatwalkItems = ({items, page, labels}) => {

  function func(a, b) {  
    return 0.5 - Math.random();
  } 

  return (
    <div className='pan-catwalk-items'>
      {labels.sort(func).map((label, i) => {
        const filtered = items.map((element) => {
          return {
            label: element.data.labels.filter((subElement) => subElement.label.uid === label.uid),
            image: element.data.image
          }
        }).filter((item) => item.label.length > 0) 
      
        let number;
        if (filtered.length > 10 ){
          number = 10;
        } else {
          number = filtered.length;
        }
        return(
          <>
            {filtered[0]?.image && filtered.length > 1 &&
              <div key={`pcil${i}`} className={`pan-catwalk-item stapels${number}`} style={{'marginRight': number * 5 + 'px', 'marginBottom': number * 4 + 'px'}}>
                {filtered.map((item,i) => (
                    <div key={`stapel${i}`} className='stapel'></div>
                ))}
                <a href={`/pan-catwalk/${label.uid}`}>
                  <PrismicImage field={filtered[Math.floor(Math.random() * filtered.length)]?.image} style={{'marginLeft': number * 5 + 'px', 'marginTop': number * 4 + 'px'}}/>  
                </a>              
              </div>
            }
          </>
        );
      })}
    </div>
  )
 }
 
 export default PanCatwalkItems