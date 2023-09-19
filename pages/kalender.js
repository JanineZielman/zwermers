import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

import Type from "../components/type"
import AgendaItems from "../components/agendaItems"

const Kalender = ({ items, menu, page }) => {
  const letters = page.data.title?.[0]?.text.split('');
  console.log(items)
  return (
    <Layout navItems={menu.data.slices}>
      <div className="wrapper-kalender wrapper">
        <Type letters={letters}/>
        <SliceZone slices={page.data.slices} components={components} />
        <AgendaItems items={items}/>
      </div>
    </Layout>
  );
};

export default Kalender;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const items = await client.getAllByType("agendaitem", { 
    orderings: {
			field: 'my.agendaitem.date',
			direction: 'desc',
		},
    fetchLinks: 'category.title'
  });
  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", "kalender");


  return {
    props: {
      items,
      menu,
      page
    },
  };
}
