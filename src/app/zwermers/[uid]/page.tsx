import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Menu from "@/components/menu"
import { PrismicImage, PrismicLink } from '@prismicio/react'


type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
  .getByUID("archief_item", params.uid, {
    fetchLinks: ['category.uid', 'category.title'],
  })
  .catch(() => notFound());

  return {
    title: page.data.title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image?.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  const page = await client
  .getByUID("archief_item", params.uid, {
    fetchLinks: ['category.uid', 'category.title'],
  })
  .catch(() => notFound());

  const menu = await client
    .getSingle("menu")
    .catch(() => notFound());

  
  return (
    <div className={`wrapper-${params.uid} page-wrapper`}>
      <Menu navItems={menu.data.slices}/>
      <div className={`content ${page.data.category}`}>
        {/* <span className='category'>{page.data.category.uid.replaceAll('-', ' ')}</span> */}
        <h1>{page.data.title}</h1>
        <div className="main-image">
          {page.data.orientation == 'Landscape' ?
            <PrismicImage field={page.data.image.landscape} />
          :
            <PrismicImage field={page.data.image} />
          }
        </div>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("archief_item");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
