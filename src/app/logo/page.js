import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Type from "@/components/type"
import Menu from "@/components/menu"
import ArchiefItem from "@/components/archiefItem"


export default async function Logo() {
  /**
   * The client queries content from the Prismic API
   */
  const client = createClient();
  const home = await client
    .getByUID("page", "zwermers")
    .catch(() => notFound());

  const letters = home.data.title?.[0]?.text.split('');

  return (
    <div className="logo-center">
      <Type letters={letters}/>
    </div>
  );
}
