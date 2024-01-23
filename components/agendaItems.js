import React, {useEffect, useState} from 'react';
import Moment from "moment";
import CollapsibleComp from 'react-collapsible';
import { useRouter } from 'next/router';

const AgendaItem = ({items, locale}) => {
  const [years, setYears] = useState([]);
  const [dif, setDif] = useState();
  var startYear = 2019;
  var currentYear = new Date().getFullYear();
	const router = useRouter();

  useEffect(() => {
    setDif(currentYear - startYear);
    while ( startYear <= currentYear ) {
      years.push(startYear++);
    }   
  }, [years])

  useEffect(() => {
    setTimeout(() => {
      const item = document.getElementById(router.query.item);
      item?.scrollIntoView();
    }, 500);
  })


  return (
    <div className='agenda'>
      {items.filter((item) => (Moment(item.data.date).format("Y") == currentYear)).map((item, i) => {
        return(
          <a href={`/${locale}/kalender/${item.uid}?item=${item.uid}`} className={`agenda-item ${item.data.category?.uid}`} id={item.uid} key={`agenda${i}`}>
            <div className='mask'>
              <h2>{item.data.title}</h2>
              <p>
                {item.data.location}<br/>
                {item.data.dates}
              </p>
            </div>
            
          </a>
        )
      })}
      <div className='old'>
        {years.slice(0,dif).reverse().map((year, j) => {
          let isOpen = false;
          if(router.query.item?.includes(year)){
            isOpen = true;
          }
          return(
            <CollapsibleComp trigger={year} open={isOpen} key={`year${j}`}>
              {items.filter((item) => (Moment(item.data.date).format("Y") == year)).map((item, i) => {
                return(
                  <a href={`/${locale}/kalender/${item.uid}?item=${item.uid}_${year}`} className={`agenda-item ${item.data.category?.uid}`} id={`${item.uid}_${year}`} key={`agenda${i}`}>
                    <div className='mask'>
                      <h2>{item.data.title}</h2>
                      <p>
                        {item.data.location}<br/>
                        {item.data.dates}
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