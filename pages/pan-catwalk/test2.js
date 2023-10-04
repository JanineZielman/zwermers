import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

import { createClient } from "../../prismicio";
import { Layout } from "../../components/Layout";

import Type from "../../components/type"

const PanCatwalk = ({ menu, page }) => {
  const letters = page.data.title?.[0]?.text.split('');

  return (
    <Layout navItems={menu.data.slices}>
      <div className="wrapper-pan-catwalk wrapper-pan-page wrapper">
        <Type letters={letters}/>
        <img className="test" src="/test2.png"/>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  );
};

export default PanCatwalk;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", "pan-catwalk");


  return {
    props: {
      menu,
      page
    },
  };
}
