import { PrismicLink, SliceZone, PrismicImage, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Head from "next/head";
import { useRouter } from 'next/router';

const AgendaItem = ({ page, menu, settings, locale }) => {
  const router = useRouter();

  return (
    <Layout navItems={menu.data.slices} item={page} settings={settings}>
      <Head>
        <title>
          {page.data.title} |{" "}
          {settings.data.site_title}
        </title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page.data.title} | ${settings.data.site_title}`} />
        <meta property="og:image" content={page.data.image.url} />
      </Head>
      <div className="page-wrapper wrapper-kalender">
        <div className={`content ${page.data.category?.uid}`}>
          <div className="back">
            <a href={`/${locale}/kalender?item=${router.query.item}`}>←</a>
          </div>
          {page.data.category.data &&<h2 className="category">{page.data.category?.data.title}</h2>}
          <h1>{page.data.title}</h1>
          
          <h2 className="location-date">
            {page.data.location}<br/>
            {page.data.dates &&  page.data.dates}
          </h2>
          <div className="main-image">
            <PrismicImage field={page.data.image} />
          </div>
          <div className="extra-info">
            <PrismicRichText field={page.data.extra_info}/>
          </div>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default AgendaItem;

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("agendaitem", params.uid, { 
    fetchLinks: 'category.title',
    lang: locale 
  });
  const menu = await client.getSingle("menu", { lang: locale });
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      menu,
      settings, 
      locale
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("agendaitem", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}