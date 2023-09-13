import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";


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
  const home = await client.getByUID("page", "home");

  const letters = home.data.title?.[0]?.text.split('')

  return (
    <div>
      <h1 className="logo chars splitting">
        {letters?.map((letter, i) => {
          return(
            <span className="char" data-char={letter} style={{'--char-index': (Math.floor(Math.random() * letters.length - 1)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>{letter}</span>
          )
        })}
      </h1>
      <SliceZone slices={home.data.slices} components={components} />
    </div>
  );
}
