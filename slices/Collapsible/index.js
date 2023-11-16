import React from 'react'
import { PrismicRichText, PrismicText } from '@prismicio/react'
import CollapsibleComp from 'react-collapsible';

/**
 * @typedef {import("@prismicio/client").Content.CollapsibleSlice} CollapsibleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollapsibleSlice>} CollapsibleProps
 * @param { CollapsibleProps }
 */
const Collapsible = ({ slice }) => {
  console.log(slice)
  return(
    <CollapsibleComp trigger={slice.primary.title[0].text}>
      <PrismicRichText field={slice.primary.description}/>
    </CollapsibleComp>
  )
}

export default Collapsible