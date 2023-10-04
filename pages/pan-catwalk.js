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

  let tags = [];
  for (let i = 0; i < 9; i++) {
    tags.push(i);
  }

  // useEffect(() => {
  //   for (let i = 0; i < tags.length; i++) { 
  //     document.getElementById(`tag${i}`).style.setProperty('--delay', (Math.floor(Math.random() * tags.length - 1)));
  //   }
  // }, [])

  return (
    <Layout navItems={menu.data.slices}>
      <div className="wrapper-pan-catwalk wrapper">
        <Type letters={letters}/>
        <div className="tags">
          {/* {tags.map((item, i) => {
            return(
              <>
              <div id={`tag${i}`} key={`tag${i}`} className="tag">
                <img src="test2.png"/>
              </div>
              </>
            )
          })}  */}
          <div className="tag">
            <img src="test2.png"/>
            <img src="test3.png"/>
          </div>
          <div className="tag">
            <img src="test3.png"/>
            <img src="test4.png"/>
          </div>
          <div className="tag">
            <img src="test4.png"/>
            <img src="test2.png"/>
          </div>
          <div className="tag">
            <img src="test2.png"/>
            <img src="test3.png"/>
          </div>
          <div className="tag">
            <img src="test3.png"/>
            <img src="test4.png"/>
          </div>
          <div className="tag">
            <img src="test4.png"/>
            <img src="test2.png"/>
          </div>
          <div className="tag">
            <img src="test2.png"/>
            <img src="test3.png"/>
          </div>
          <div className="tag">
            <img src="test3.png"/>
            <img src="test4.png"/>
          </div>
          <div className="tag">
            <img src="test4.png"/>
            <img src="test2.png"/>
          </div>
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
