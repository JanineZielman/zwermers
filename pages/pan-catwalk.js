import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import React, { useEffect } from 'react';

import Type from "../components/type"
import dynamic from 'next/dynamic'

const PanCatwalk = ({ menu, page, items, labels }) => {
  const PanCatwalkItems = dynamic(() => import('../components/panCatwalkItems'), { ssr: false })
  const letters = page.data.title?.[0]?.text.split('');

  return (
    <Layout navItems={menu.data.slices} item={page}>
      <div className="wrapper-pan-catwalk wrapper">
        <Type letters={letters}/>
        <SliceZone slices={page.data.slices} components={components} />
        <PanCatwalkItems items={items} page={page} labels={labels}/>
      </div>
    </Layout>
  );
};

export default PanCatwalk;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const items = await client.getAllByType("pan_catwalk_item");
  const labels = await client.getAllByType("label");

  const menu = await client.getSingle("menu", { lang: locale });
  const page = await client.getByUID("page", "pan-catwalk", { lang: locale });


  return {
    props: {
      menu,
      page,
      items,
      labels
    },
  };
}
