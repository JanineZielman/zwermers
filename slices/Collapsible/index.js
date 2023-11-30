import React from 'react'
import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/react'
import CollapsibleComp from 'react-collapsible';

/**
 * @typedef {import("@prismicio/client").Content.CollapsibleSlice} CollapsibleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollapsibleSlice>} CollapsibleProps
 * @param { CollapsibleProps }
 */
const Collapsible = ({ slice }) => {
  return(
    <CollapsibleComp trigger={slice.primary.title[0].text}>
      <PrismicRichText field={slice.primary.description}/>
      <div className='collapsible-slices'>
        {slice.items.map((item, i) => {
          console.log(item)
          return(
            <div className='collapsible-slice'>
              {item.image && <PrismicImage field={item.image}/>}
              {item.title &&<h3>{item.title}</h3>}
              <p>
                <PrismicRichText field={item.text}/>
              </p>
              <PrismicLink target="_blank" field={item.file}>{item.file_title}</PrismicLink>
            </div>
          )
        })}
      </div>
    </CollapsibleComp>
  )
}

export default Collapsible