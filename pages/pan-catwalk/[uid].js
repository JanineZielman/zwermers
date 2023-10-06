import { PrismicLink, SliceZone, PrismicImage } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import * as prismic from '@prismicio/client'

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import PanCatwalkItems from "../../components/panCatwalkItems";

const LabelItem = ({ page, menu, items }) => {
  return (
    <Layout navItems={menu.data.slices}>
      <div className="wrapper-pan-catwalk wrapper">
        <SliceZone slices={page.data.slices} components={components} />
        <PanCatwalkItems items={items} page={page}/>
      </div>
    </Layout>
  );
};

export default LabelItem;

export async function getStaticProps({ params, previewData }) {
  // const prismic = require("@prismicio/client");
  const client = createClient({ previewData });

  // const items = await client.getAllByType('pan_catwalk_item')
  const items = await client.getAllByType('pan_catwalk_item', {
    predicates: [
      prismic.predicate.fulltext(
        'document',
        params.uid
      ),
    ],
  })
  

  const page = await client.getByUID("label", params.uid);
  const menu = await client.getSingle("menu");

  return {
    props: {
      page,
      menu,
      items,
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