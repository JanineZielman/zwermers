import React, { useState, useEffect, useRef } from 'react';
import { PrismicImage } from '@prismicio/react';
import Isotope from 'isotope-layout';

const PanCatwalkItems = ({items, page, labels}) => {

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState('.show7');

  function func(a, b) {  
    return 0.5 - Math.random();
  } 

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.pan-catwalk-items', {
      itemSelector: '.pan-catwalk-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy();
  }, [])

  // handling filter key change
  useEffect(() => {
     filterKey === '*'
      ? isotope.current.arrange({filter: `*`})
      : isotope.current.arrange({filter: `${filterKey.replace('*', '')}`})

    if(filterKey != '*' && filterKey != '.show7'){
      for (let i = 0; i < labels.length; i++) {
        document.getElementById('.' + labels[i].uid).classList.add('hide');
        document.getElementById('.' + labels[i].uid).classList.remove('show');
        for (let j = 0; j < document.querySelectorAll(filterKey.replaceAll('*', '')).length; j++){
          if(document.querySelectorAll(filterKey.replaceAll('*', ''))[j].classList.value.includes(labels[i].uid + ' ')){
            document.getElementById('.' + labels[i].uid).classList.remove('hide');
            document.getElementById('.' + labels[i].uid).classList.add('show');
          } else {
            // document.getElementById('.' + labels[i].uid).classList.add('hide');
            // document.getElementById('.' + labels[i].uid).classList.remove('show');
          }
        }
      }
    } else {
      for (let i = 0; i < labels.length; i++) {
        document.getElementById('.' + labels[i].uid).classList.remove('hide');
        document.getElementById('.' + labels[i].uid).classList.remove('show');
        document.getElementById('.' + labels[i].uid).classList.remove('active');
      }
    }
  }, [filterKey])


  const handleFilterKeyChange = key => () => {
    if(key === '*'){
      setFilterKey(key);
      labels.sort(func);
      document.getElementsByClassName('pan-catwalk-items')[0].setAttribute(`id`,`lengthAll`);
    } else{
      if(filterKey.includes(key)){
        setFilterKey(filterKey.replace(key, ''));
        document.getElementById(key).classList.remove('active');
        document.getElementsByClassName('pan-catwalk-items')[0].setAttribute(`id`,`length${document.querySelectorAll(filterKey.replace(key, '')).length}`);
        if (filterKey.match(/\./g).length == 1){
          labels.sort(func);
        }
      } else {
        setFilterKey(filterKey + key);
        document.getElementById(key).classList.add('active');
        document.getElementsByClassName('pan-catwalk-items')[0].setAttribute(`id`,`length${document.querySelectorAll(filterKey + key).length}`);
      }
    }
  }


  return (
    <div className='pan-catwalk-page'>
      <div className='filter'>
        <div className='label' onClick={handleFilterKeyChange('*')}>Show all</div>
        {labels.map((label, i) => {
          return(
            <div id={`.${label.uid}`} key={`label${i}`} className={`label ${label.data.category}`} onClick={handleFilterKeyChange('.' + label.uid)}>{label.data.title ? label.data.title : label.uid.replaceAll('-', ' ')}</div>
          )
        })}
      </div>
      <div className='pan-catwalk-items'>
        {items.sort(func).map((item, i) => {  
          let labelsclasses = [];
          for (let i = 0; i < item.data.labels.length; i++) {
            labelsclasses += item.data.labels[i].label?.uid + ' '
          }
          return(
            <div key={`pci${i}`} className={`pan-catwalk-item ${labelsclasses} show${Math.floor(Math.random() * 10)}`}>
              <PrismicImage field={item.data.image}/>           
            </div>
          );
        })}
      </div>
  </div>
  )
 }
 
 export default PanCatwalkItems