"use client"
import React, { useEffect } from 'react';

const Type = ({letters}) => {

  useEffect(() => {
    for (let i = 0; i < letters.length; i++) { 
      document.getElementById(`char${i}`).style.setProperty('--char-index', (Math.floor(Math.random() * letters.length - 1)));
      document.getElementById(`char${i}`).style.setProperty('--random', (Math.floor(Math.random() * 9) * 100 + 100));
    }
  }, [])

  return (
    <h1 className="logo chars splitting">
      {letters?.map((letter, i) => {
        return(
          <span key={`char${i}`} id={`char${i}`} className={`char ${letter}space`} data-char={letter}>
              {letter}
          </span>
        )
      })}
    </h1>
  )
 }
 
 export default Type