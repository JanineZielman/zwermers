import React, { useState, useEffect } from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react'

const PanCatwalkItems = ({items, page, labels}) => {
  // console.log(labels)
  // const [filtered, setFiltered] = useState([]);
  // useEffect(() => {
  //   // setFiltered(items.filter(item => item.data.labels.every(c => c.label.uid == 'jurk')));
  //   setFiltered(items.map((element) => {
  //     return (element.data.labels.filter((subElement) => subElement.label.uid === 'jurk'))
  //   }))
  // },[])
  // console.log(filtered);
  return (
    <div className='pan-catwalk-items'>
      {labels.map((label, i) => {
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
            {filtered[0]?.image &&
              <div key={`pcil${i}`} className={`pan-catwalk-item stapels${number}`} style={{'marginRight': number * 5 + 'px', 'marginBottom': number * 2 + 'px'}}>
                {filtered.map((item,i) => {
                  return(
                    <div key={`stapel${i}`} className='stapel'>
                    </div>
                  )
                })}
                
   
                <PrismicImage field={filtered[0]?.image} style={{'marginLeft': number * 5 + 'px', 'marginTop': number * 2 + 'px'}}/>
         
                {/* {label.uid} */}
                
              </div>
            }
          </>
        );
      })}
      {/* {items.map((item, i) => {
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
      })} */}
    </div>
  )
 }
 
 export default PanCatwalkItems