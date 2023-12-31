import { PrismicLink, SliceZone, PrismicImage } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import * as prismic from '@prismicio/client'

import Type from "../../components/type"
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import dynamic from 'next/dynamic'


const LabelItem = ({ page, menu, items, labels, settings }) => {
  const PanCatwalkItems = dynamic(() => import('../../components/panCatwalkItems'), { ssr: false })
  const catwalk = "Pan~// catwalk";
  const letters = catwalk.split('');
  return (
    <Layout navItems={menu.data.slices} item={page} settings={settings}>
      <div className="wrapper-pan-catwalk wrapper">
        <Type letters={letters}/>
        <SliceZone slices={page.data.slices} components={components} />
        <PanCatwalkItems items={items} page={page} labels={labels}/>
      </div>
    </Layout>
  );
};

export default LabelItem;

export async function getStaticProps({ params, previewData, locale }) {
  // const prismic = require("@prismicio/client");
  const client = createClient({ previewData });

  const page = await client.getByUID("label", params.uid);
  const menu = await client.getSingle("menu", { lang: locale });
  const labels = await client.getAllByType("label", {
    predicates: [
      prismic.predicate.not(
        'my.label.uid',
        page.uid
      ),
    ],
  });
  const settings = await client.getSingle("settings");

  const items = await client.getAllByType('pan_catwalk_item', {
    predicates: [
      prismic.predicate.at(
        'my.pan_catwalk_item.labels.label',
        page.id
      ),
    ],
  })

  return {
    props: {
      page,
      menu,
      items,
      labels,
      settings
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("label");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}