import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

import Type from "../components/type"
import ArchiefItem from "../components/archiefItem"

const Index = ({ items, menu, page, locale, settings}) => {
  const letters = page.data.title?.[0]?.text.split('');

  return (
    <Layout navItems={menu.data.slices} item={page} settings={settings}>
      <div className="wrapper-zwermers wrapper">
        <Type letters={letters}/>
        <SliceZone slices={page.data.slices} components={components} />
        <ArchiefItem items={items} locale={locale}/>
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
  const settings = await client.getSingle("settings");


  return {
    props: {
      items,
      menu,
      page,
      locale,
      settings
    },
  };
}
