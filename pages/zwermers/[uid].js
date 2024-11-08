import { PrismicLink, SliceZone, PrismicImage } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Head from "next/head";

const ArchiveItem = ({ page, menu, settings }) => {

  function goBack(){
    history.back();
  }
  
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
      <div className="page-wrapper">
        <div className={`content ${page.data.category?.uid}`}>
          <div className="back">
            <div onClick={goBack}>←</div>
          </div>
          <h2 className="category">{page.data.category?.data?.title}</h2>
          <h1>{page.data.title}</h1>
          <h2 className="location-date">{page.data.dates &&  page.data.dates}</h2>
          
          <div className="main-image">
            {page.data.embed.embed_url ?
              <iframe src={page.data.embed.embed_url}/>
            :
              <PrismicImage field={page.data.image} />
            }
          </div>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default ArchiveItem;

export async function getStaticProps({ locale, params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("archief_item", params.uid, { 
    fetchLinks: 'category.title',
    lang: locale 
  });
  const menu = await client.getSingle("menu", { lang: locale });
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      menu,
      settings
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("archief_item", { lang: "*" });

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