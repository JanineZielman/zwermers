import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

import Type from "../components/type"

const OverOns = ({ menu, page }) => {
  const letters = page.data.title?.[0]?.text.split('');

  return (
    <Layout navItems={menu.data.slices}>
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

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("page", "over-ons");


  return {
    props: {
      menu,
      page
    },
  };
}
