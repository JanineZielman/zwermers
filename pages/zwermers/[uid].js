import { PrismicLink, SliceZone, PrismicImage } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Layout } from "../../components/Layout";
import Moment from "moment";

const ArchiveItem = ({ page, menu }) => {
  return (
    <Layout navItems={menu.data.slices} item={page}>
      <div className="page-wrapper">
        <div className={`content ${page.data.category?.uid}`}>
          <h2 className="category">{page.data.category?.uid.replaceAll('-', ' ')}</h2>
          <h1>
            {page.data.title}
            {page.data.date &&  
              <><br/> {Moment(page.data.date).format("DD.MM.Y")}</>
            }
          </h1>
          
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

  const page = await client.getByUID("archief_item", params.uid, { lang: locale });
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

  const pages = await client.getAllByType("archief_item");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: false,
  };
}