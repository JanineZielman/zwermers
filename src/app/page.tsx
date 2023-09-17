import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Type from "@/components/type"
import Menu from "@/components/menu"
import ArchiefItem from "@/components/archiefItem"

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Index() {
  /**
   * The client queries content from the Prismic API
   */
  const client = createClient();
  const home = await client
    .getByUID("page", "zwermers")
    .catch(() => notFound());
  const menu = await client
    .getSingle("menu")
    .catch(() => notFound());
  const items = await client
    .getAllByType("archief_item")
    .catch(() => notFound());

  const letters = home.data.title?.[0]?.text.split('');

  return (
    <div className="wrapper-zwermers wrapper">
      <Menu navItems={menu.data.slices}/>
      <Type letters={letters}/>
      <SliceZone slices={home.data.slices} components={components} />
      <ArchiefItem items={items}/>
    </div>
  );
}
