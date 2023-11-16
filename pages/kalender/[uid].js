import { PrismicLink, SliceZone, PrismicImage } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Moment from "moment";

const AgendaItem = ({ page, menu }) => {

  return (
    <Layout navItems={menu.data.slices}>
      <div className="page-wrapper">
        <div className={`content ${page.data.category?.uid}`}>
          <span className='category'>{page.data.category?.uid.replaceAll('-', ' ')}</span>
          <h1>{page.data.title}</h1>
          <p>
            {page.data.location}<br/>
            {Moment(page.data.date).format("DD.MM.Y")}
          </p>
          <div className="main-image">
            <PrismicImage field={page.data.image} />
          </div>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default AgendaItem;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("agendaitem", params.uid);
  const menu = await client.getSingle("menu");

  return {
    props: {
      page,
      menu,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("agendaitem");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}