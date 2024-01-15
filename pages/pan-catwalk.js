import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import React, { useEffect } from 'react';

import Type from "../components/type"
import dynamic from 'next/dynamic'

const PanCatwalk = ({ menu, page, items, labels, settings }) => {
  const PanCatwalkItems = dynamic(() => import('../components/panCatwalkItems'), { ssr: false })
  const letters = page.data.title?.[0]?.text.split('');

  function playPause() {
    var track = document.getElementById('track');
    var controlBtn = document.getElementById('play-pause');
    if (track.paused) {
        track.play();
        controlBtn.className = "pause";
    } else { 
        track.pause();
        controlBtn.className = "play";
    }
  }

  return (
    <Layout navItems={menu.data.slices} item={page} settings={settings}>
      <Head>
        <title>
        {prismicH.asText(page.data.title)} |{" "}
          {settings.data.site_title}
        </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${prismicH.asText(page.data.title)} | ${settings.data.site_title}`} />
        <meta property="og:image" content={settings.data.image.url} />
      </Head>
      <div className="wrapper-pan-catwalk wrapper">
        <audio id="track" loop>
          <source src="music.mp3" type="audio/mpeg" />
        </audio>

        <div id="player-container">
          <div id="play-pause" onClick={playPause} className="play"></div>
        </div>
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

  function func(a, b) {  
    return 0.5 - Math.random();
  } 

  const items = await client.getAllByType("pan_catwalk_item");
  const labels = (await client.getAllByType("label", { lang: locale })).sort(func);

  const menu = await client.getSingle("menu", { lang: locale });
  const page = await client.getByUID("page", "pan-catwalk", { lang: locale });
  const settings = await client.getSingle("settings");


  return {
    props: {
      menu,
      page,
      items,
      labels,
      settings
    },
  };
}
