import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

import Type from "../components/type"
import AgendaItems from "../components/agendaItems"

const Kalender = ({ items, menu, page, locale, settings }) => {
  const letters = page.data.title?.[0]?.text.split('');

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
      <div className="wrapper-kalender wrapper">
        <Type letters={letters}/>
        <SliceZone slices={page.data.slices} components={components} />
        <AgendaItems items={items} locale={locale}/>
      </div>
    </Layout>
  );
};

export default Kalender;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const items = await client.getAllByType("agendaitem", { 
    orderings: {
			field: 'my.agendaitem.date',
			direction: 'asc',
		},
    fetchLinks: 'category.title',
    lang: locale
  });
  const menu = await client.getSingle("menu", { lang: locale });
  const page = await client.getByUID("page", "kalender", { lang: locale });
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
