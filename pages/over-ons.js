import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

import Type from "../components/type"

const OverOns = ({ menu, page, settings }) => {
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
      <div className="wrapper-over-ons wrapper">
        <Type letters={letters}/>
        <div className="content">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default OverOns;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu", { lang: locale });
  const page = await client.getByUID("page", "over-ons", { lang: locale });
  const settings = await client.getSingle("settings");


  return {
    props: {
      menu,
      page,
      settings
    },
  };
}
