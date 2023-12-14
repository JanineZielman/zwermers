import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ButtonSlice} ButtonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ButtonSlice>} ButtonProps
 * @param { ButtonProps }
 */
const Button = ({ slice }) => {
  return(
    <section className='buttons'>
      {slice.items.map((item, i) => {
        return(
          <PrismicLink key={`button${i}`} className='button' field={item.link}>{item.label}</PrismicLink>
        )
      })}
    </section>
  )
}

export default Button