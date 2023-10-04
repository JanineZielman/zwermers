import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect } from 'react';

import Type from "../components/type"

const PanCatwalk = ({ menu, page }) => {
  const letters = page.data.title?.[0]?.text.split('');

  return (
    <Layout navItems={menu.data.slices}>
      <div className="wrapper-pan-catwalk wrapper">
        <Type letters={letters}/>
        <div className="tags">
           <a href="/pan-catwalk/test" className="tag tag20"></a>
           <a href="/pan-catwalk/test2" className="tag tag10"></a>
           <a href="/pan-catwalk/test" className="tag tag70"></a>

           <a href="/pan-catwalk/test" className="tag tag60"></a>
           <a href="/pan-catwalk/test2" className="tag tag10"></a>
           <a href="/pan-catwalk/test" className="tag tag20"></a>

           <a href="/pan-catwalk/test" className="tag tag20"></a>
           <a href="/pan-catwalk/test" className="tag tag70"></a>
           <a href="/pan-catwalk/test2" className="tag tag10"></a>

           <a href="/pan-catwalk/test2" className="tag tag10"></a>
           <a href="/pan-catwalk/test" className="tag tag90"></a>

           <a href="/pan-catwalk/test" className="tag tag30"></a>
           <a href="/pan-catwalk/test" className="tag tag40"></a>
           <a href="/pan-catwalk/test" className="tag tag20"></a>

           <a href="/pan-catwalk/test" className="tag tag80"></a>
           <a href="/pan-catwalk/test" className="tag tag20"></a>
           
           <a href="/pan-catwalk/test" className="tag tag50"></a>
           <a href="/pan-catwalk/test2" className="tag tag10"></a>
           <a href="/pan-catwalk/test" className="tag tag40"></a>

           <a href="/pan-catwalk/test" className="tag tag20"></a>
           <a href="/pan-catwalk/test2" className="tag tag10"></a>
           <a href="/pan-catwalk/test" className="tag tag60"></a>

           <a href="/pan-catwalk/test" className="tag tag20"></a>
           <a href="/pan-catwalk/test2" className="tag tag10"></a>
           <a href="/pan-catwalk/test" className="tag tag70"></a>

           <a href="/pan-catwalk/test" className="tag tag60"></a>
           <a href="/pan-catwalk/test2" className="tag tag10"></a>
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  );
};

export default PanCatwalk;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", "pan-catwalk");


  return {
    props: {
      menu,
      page
    },
  };
}
