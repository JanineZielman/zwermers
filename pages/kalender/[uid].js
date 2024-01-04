import { PrismicLink, SliceZone, PrismicImage, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";

const AgendaItem = ({ page, menu }) => {

  return (
    <Layout navItems={menu.data.slices} item={page}>
      <div className="page-wrapper wrapper-kalender">
        <div className={`content ${page.data.category?.uid}`}>
          <h2 className="category">{page.data.category?.uid.replaceAll('-', ' ')}</h2>
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

  const page = await client.getByUID("agendaitem", params.uid, { lang: locale });
  const menu = await client.getSingle("menu", { lang: locale });

  return {
    props: {
      page,
      menu,
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