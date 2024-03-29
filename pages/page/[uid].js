import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Type from "../../components/type"

const Page = ({ page, menu, settings }) => {
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
      <div className={`wrapper-${page.uid} wrapper`}>
        <Type letters={letters}/>
        <div className="content">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData, locale }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
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

  const pages = await client.getAllByType("page", { lang: "*" });

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
