import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'


/**
 * @typedef {import("@prismicio/client").Content.LogoSectionSlice} LogoSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSectionSlice>} LogoSectionProps
 * @param { LogoSectionProps }
 */
const LogoSection = ({ slice }) => {
  return(
    <section className='logo-section'>
      <h2>{slice.primary.title}</h2>
      <PrismicRichText field={slice.primary.text}/>
      <div className='logos'>
        {slice.items.map((item, i) => {
          return(
            <PrismicLink field={item.link}>
              <PrismicNextImage field={item.image}/>
            </PrismicLink>
          )
        })}
      </div>
    </section>
  )
}

export default LogoSection