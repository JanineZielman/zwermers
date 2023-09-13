"use client"
import React from 'react';

const Menu = ({navItems}) => {
  return (
    <div className='menu'>
      {navItems.map((item, i) => {
        return(
          <a key={`nav${i}`} className={item.primary.link.uid} href={`/${item.primary.link.uid}`}>{item.primary.title}</a>
        )
      })}
    </div>
  )
 }
 
 export default Menu