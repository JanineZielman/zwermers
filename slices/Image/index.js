import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => (
  <section className={`image-section`}>
    <PrismicNextImage field={slice.primary.image}/>
    <PrismicRichText className="caption" field={slice.primary.caption}/>
  </section>
)

export default Image