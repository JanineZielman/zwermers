import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

import Type from "../components/type"
import ArchiefItem from "../components/archiefItem"

const Index = ({ items, menu, page}) => {
  const letters = page.data.title?.[0]?.text.split('');

  return (
    <Layout navItems={menu.data.slices} item={page}>
      <div className="wrapper-zwermers wrapper">
        <Type letters={letters}/>
        <SliceZone slices={page.data.slices} components={components} />
        <ArchiefItem items={items}/>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const items = await client.getAllByType("archief_item", { 
    orderings: {
			field: 'my.archief_item.date',
			direction: 'desc',
		},
    fetchLinks: 'category.title',
    lang: locale
  });
  const menu = await client.getSingle("menu", { lang: locale });
  const page = await client.getByUID("page", "zwermers",  { lang: locale });


  return {
    props: {
      items,
      menu,
      page,
    },
  };
}
