import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.EmbedSlice} EmbedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedSlice>} EmbedProps
 * @param { EmbedProps }
 */
const Embed = ({ slice }) => (
  <iframe src={slice.primary.embed.embed_url}/>
)

export default Embed