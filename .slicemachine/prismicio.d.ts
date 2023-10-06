// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismicClient from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for AgendaItem documents
 */
interface AgendaitemDocumentData {
	/**
	 * Title field in *AgendaItem*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Date field in *AgendaItem*
	 *
	 * - **Field Type**: Timestamp
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#timestamp
	 */
	date: prismic.TimestampField;
	
	/**
	 * Location field in *AgendaItem*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.location
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	location: prismic.KeyTextField;
	
	/**
	 * Category field in *AgendaItem*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	category: prismic.ContentRelationshipField<"category">;
}

/**
 * AgendaItem document from Prismic
 *
 * - **API ID**: `agendaitem`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AgendaitemDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<AgendaitemDocumentData>, "agendaitem", Lang>;

type ArchiefItemDocumentDataSlicesSlice = RichTextSlice

/**
 * Content for ArchiefItem documents
 */
interface ArchiefItemDocumentData {
	/**
	 * Title field in *ArchiefItem*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Image field in *ArchiefItem*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Size field in *ArchiefItem*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.size
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	size: prismic.SelectField<"Big" | "Middle" | "Small">;
	
	/**
	 * Category field in *ArchiefItem*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	category: prismic.ContentRelationshipField<"category">;
	
	/**
	 * Slice Zone field in *ArchiefItem*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ArchiefItemDocumentDataSlicesSlice>;/**
	 * Meta Title field in *ArchiefItem*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *ArchiefItem*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *ArchiefItem*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * ArchiefItem document from Prismic
 *
 * - **API ID**: `archief_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArchiefItemDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<ArchiefItemDocumentData>, "archief_item", Lang>;

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
	/**
	 * Title field in *Category*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: category.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;

interface LabelDocumentData {}

/**
 * Label document from Prismic
 *
 * - **API ID**: `label`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LabelDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<LabelDocumentData>, "label", Lang>;

type MenuDocumentDataSlicesSlice = NavItemSlice

/**
 * Content for Menu documents
 */
interface MenuDocumentData {
	/**
	 * Slice Zone field in *Menu*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: menu.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<MenuDocumentDataSlicesSlice>;
}

/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;

type PageDocumentDataSlicesSlice = RichTextSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;/**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Pan Catwalk Item → Labels*
 */
export interface PanCatwalkItemDocumentDataLabelsItem {
	/**
	 * Label field in *Pan Catwalk Item → Labels*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pan_catwalk_item.labels[].label
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	label: prismic.ContentRelationshipField<"label">;
}

/**
 * Content for Pan Catwalk Item documents
 */
interface PanCatwalkItemDocumentData {
	/**
	 * Image field in *Pan Catwalk Item*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pan_catwalk_item.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Labels field in *Pan Catwalk Item*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pan_catwalk_item.labels[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	labels: prismic.GroupField<Simplify<PanCatwalkItemDocumentDataLabelsItem>>;
	
	/**
	 * labelText field in *Pan Catwalk Item*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: pan_catwalk_item.labeltext
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	labeltext: prismic.RichTextField;
}

/**
 * Pan Catwalk Item document from Prismic
 *
 * - **API ID**: `pan_catwalk_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PanCatwalkItemDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<PanCatwalkItemDocumentData>, "pan_catwalk_item", Lang>;

export type AllDocumentTypes = AgendaitemDocument | ArchiefItemDocument | CategoryDocument | LabelDocument | MenuDocument | PageDocument | PanCatwalkItemDocument;

/**
 * Primary content in *NavItem → Primary*
 */
export interface NavItemSliceDefaultPrimary {
	/**
	 * Link field in *NavItem → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav_item.primary.link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
	
	/**
	 * Title field in *NavItem → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nav_item.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
}

/**
 * Default variation for NavItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavItemSliceDefault = prismic.SharedSliceVariation<"default", Simplify<NavItemSliceDefaultPrimary>, never>;

/**
 * Slice variation for *NavItem*
 */
type NavItemSliceVariation = NavItemSliceDefault

/**
 * NavItem Shared Slice
 *
 * - **API ID**: `nav_item`
 * - **Description**: NavItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavItemSlice = prismic.SharedSlice<"nav_item", NavItemSliceVariation>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
	/**
	 * Content field in *RichText → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum...
	 * - **API ID Path**: rich_text.primary.content
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<"default", Simplify<RichTextSliceDefaultPrimary>, never>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<"rich_text", RichTextSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismicClient.ClientConfig): prismicClient.Client<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			AgendaitemDocument,
			AgendaitemDocumentData,
			ArchiefItemDocument,
			ArchiefItemDocumentData,
			ArchiefItemDocumentDataSlicesSlice,
			CategoryDocument,
			CategoryDocumentData,
			LabelDocument,
			LabelDocumentData,
			MenuDocument,
			MenuDocumentData,
			MenuDocumentDataSlicesSlice,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			PanCatwalkItemDocument,
			PanCatwalkItemDocumentData,
			PanCatwalkItemDocumentDataLabelsItem,
			AllDocumentTypes,
			NavItemSlice,
			NavItemSliceDefaultPrimary,
			NavItemSliceVariation,
			NavItemSliceDefault,
			RichTextSlice,
			RichTextSliceDefaultPrimary,
			RichTextSliceVariation,
			RichTextSliceDefault
		}
	}
}