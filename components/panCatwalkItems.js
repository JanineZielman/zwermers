import React, { useState, useEffect, useRef } from 'react';
import { PrismicImage, PrismicLink } from '@prismicio/react';
import Isotope from 'isotope-layout';

const PanCatwalkItems = ({items, page, labels}) => {

  console.log(labels)

  function func(a, b) {  
    // return 0.5 - Math.random();
  } 

  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.pan-catwalk-items', {
      itemSelector: '.pan-catwalk-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])

  // handling filter key change
  useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `.${filterKey}`})
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <div className='pan-catwalk-page'>
      <div className='filter'>
        <div className='label' onClick={handleFilterKeyChange('*')}>Show all</div>
        {labels.map((label, i) => {
          let active = false;
          if (label.uid == filterKey){
            active = true;
          }
          return(
            <div key={`label${i}`} className={`label ${label.data.category} ${active}`} onClick={handleFilterKeyChange(label.uid)}>{label.uid.replaceAll('-', ' ')}</div>
          )
        })}
      </div>
      <div className='pan-catwalk-items'>
        {items.sort(func).map((item, i) => {  
          let labelsclasses = [];
          for (let i = 0; i < item.data.labels.length; i++) {
            labelsclasses += item.data.labels[i].label.uid + ' '
          }
          return(
            <div key={`pci${i}`} className={`pan-catwalk-item ${labelsclasses}`}>
              <PrismicImage field={item.data.image}/>               
            </div>
          );
        })}
      </div>
    </div>
  )
 }
 
 export default PanCatwalkItems