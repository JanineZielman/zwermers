import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);
/**
 * The project's Prismic Link Resolver. This function determines the URL for a
 * given Prismic document.
 *
 * A Link Resolver is used rather than a Route Resolver because we need to
 * resolve URLs for documents' `alternate_languages` items. The
 * `alternate_languages` array does not include URLs.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    if (doc.uid === "zwermers") {
      return `/`;
    }  else if (doc.uid === "kalender") {
      return `/kalender`;
    } else if (doc.uid === "over-ons") {
      return `/over-ons`;
    } else if (doc.uid === "pan-catwalk") {
      return `/pan-catwalk`;
    } else {
      return `/page/${doc.uid}`;
    }
  }
  if (doc.type === "archief_item") {
    return `/zwermers/${doc.uid}`;
  }
  if (doc.type === "agendaitem") {
    return `/kalender/${doc.uid}`;
  }
  if (doc.type === "label") {
    return `/pan-catwalk/${doc.uid}`;
  }
  return `/`;
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = ({ previewData, req, ...config } = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config);

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
};
