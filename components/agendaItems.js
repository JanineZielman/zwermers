import React, {useEffect, useState} from 'react';
// import { PrismicImage, PrismicLink } from '@prismicio/react'
import Moment from "moment";

import CollapsibleComp from 'react-collapsible';

const AgendaItem = ({items}) => {
  const [years, setYears] = useState([]);
  const [dif, setDif] = useState();
  var startYear = 2019;
  var currentYear = new Date().getFullYear();

  useEffect(() => {
    setDif(currentYear - startYear);
    while ( startYear <= currentYear ) {
      years.push(startYear++);
    }
  }, [years])


  return (
    <div className='agenda'>
      {items.filter((item) => (Moment(item.data.date).format("Y") == currentYear)).map((item, i) => {
        return(
          <a href={`/kalender/${item.uid}`} className={`agenda-item ${item.data.category?.uid}`} key={`agenda${i}`}>
            <div className='mask'>
              <h2>{item.data.title}</h2>
              <p>
                {item.data.location}<br/>
                {item.data.dates}
                {/* {Moment(item.data.date).format("DD.MM.Y")} */}
              </p>
            </div>
            
          </a>
        )
      })}
      <div className='old'>
        {years.slice(0,dif).reverse().map((year, j) => {
          return(
            <CollapsibleComp trigger={year} key={`year${j}`}>
              {items.filter((item) => (Moment(item.data.date).format("Y") == year)).map((item, i) => {
                return(
                  <a href={`/kalender/${item.uid}`} className={`agenda-item ${item.data.category?.uid}`} key={`agenda${i}`}>
                    <div className='mask'>
                      <h2>{item.data.title}</h2>
                      <p>
                        {item.data.location}<br/>
                        {item.data.dates}
                        {/* {Moment(item.data.date).format("DD.MM.Y")} */}
                      </p>
                    </div>
                    
                  </a>
                )
              })}
            </CollapsibleComp>
          )
        })}
      </div>
    </div>
  )
 }
 
 export default AgendaItem