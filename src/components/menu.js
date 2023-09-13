"use client"
import React from 'react';
import { PrismicLink, PrismicText } from "@prismicio/react";

const Menu = ({navItems}) => {
  return (
    <div className='menu'>
      {navItems.map((item, i) => {
        return(
          <PrismicLink className={item.primary.link.uid} field={item.primary.link} key={`nav${i}`}>
            {item.primary.title}
          </PrismicLink>
        )
      })}
    </div>
  )
 }
 
 export default Menu