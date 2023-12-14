// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/types";
import type * as prismicClient from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AgendaitemDocumentDataSlicesSlice = RichTextSlice | EmbedSlice | ImageSlice | ButtonSlice

/**
 * Content for Kalender Item documents
 */
interface AgendaitemDocumentData {
	/**
	 * Title field in *Kalender Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Start Date (for order) field in *Kalender Item*
	 *
	 * - **Field Type**: Timestamp
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#timestamp
	 */
	date: prismic.TimestampField;
	
	/**
	 * Date(s)  field in *Kalender Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: 18.05 – 29.05.2023
	 * - **API ID Path**: agendaitem.dates
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	dates: prismic.KeyTextField;
	
	/**
	 * Location field in *Kalender Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.location
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	location: prismic.KeyTextField;
	
	/**
	 * Category field in *Kalender Item*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	category: prismic.ContentRelationshipField<"category">;
	
	/**
	 * Image field in *Kalender Item*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Extra Info field in *Kalender Item*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.extra_info
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	extra_info: prismic.RichTextField;
	
	/**
	 * Slice Zone field in *Kalender Item*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: agendaitem.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<AgendaitemDocumentDataSlicesSlice>;
}

/**
 * Kalender Item document from Prismic
 *
 * - **API ID**: `agendaitem`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AgendaitemDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<AgendaitemDocumentData>, "agendaitem", Lang>;

type ArchiefItemDocumentDataSlicesSlice = RichTextSlice | EmbedSlice | ImageSlice | ButtonSlice

/**
 * Content for Portfolio Item documents
 */
interface ArchiefItemDocumentData {
	/**
	 * Title field in *Portfolio Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Date(s) field in *Portfolio Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: 18.05 – 29.05.2023
	 * - **API ID Path**: archief_item.dates
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	dates: prismic.KeyTextField;
	
	/**
	 * Image field in *Portfolio Item*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Embed field in *Portfolio Item*
	 *
	 * - **Field Type**: Embed
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.embed
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#embed
	 */
	embed: prismic.EmbedField
	
	/**
	 * Category field in *Portfolio Item*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	category: prismic.ContentRelationshipField<"category">;
	
	/**
	 * Date (for order) field in *Portfolio Item*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.date
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date: prismic.DateField;
	
	/**
	 * Slice Zone field in *Portfolio Item*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ArchiefItemDocumentDataSlicesSlice>;/**
	 * Meta Title field in *Portfolio Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Portfolio Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: archief_item.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *Portfolio Item*
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
 * Portfolio Item document from Prismic
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

/**
 * Content for Label documents
 */
interface LabelDocumentData {
	/**
	 * Category field in *Label*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: label.category
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	category: prismic.SelectField<"persoon" | "basics" | "dominante kleur" | "textiel" | "kledingcategorie" | "locatie" | "attributen">;
}

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

type PageDocumentDataSlicesSlice = RichTextSlice | CollapsibleSlice | LogoSectionSlice

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
export type PanCatwalkItemDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<PanCatwalkItemDocumentData>, "pan_catwalk_item", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	site_title: prismic.KeyTextField;
	
	/**
	 * Site Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	site_description: prismic.KeyTextField;
	
	/**
	 * Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Logo Text field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.logo_text
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	logo_text: prismic.KeyTextField;
	
	/**
	 * Logo Background field in *Settings*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.logo_background
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	logo_background: prismic.ColorField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;

export type AllDocumentTypes = AgendaitemDocument | ArchiefItemDocument | CategoryDocument | LabelDocument | MenuDocument | PageDocument | PanCatwalkItemDocument | SettingsDocument;

/**
 * Primary content in *Button → Items*
 */
export interface ButtonSliceDefaultItem {
	/**
	 * Label field in *Button → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: button.items[].label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	label: prismic.KeyTextField;
	
	/**
	 * Link field in *Button → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: button.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<"default", Record<string, never>, Simplify<ButtonSliceDefaultItem>>;

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<"button", ButtonSliceVariation>;

/**
 * Primary content in *Collapsible → Primary*
 */
export interface CollapsibleSliceDefaultPrimary {
	/**
	 * Title field in *Collapsible → Primary*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: This is where it all begins...
	 * - **API ID Path**: collapsible.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * Description field in *Collapsible → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: A nice description of your feature
	 * - **API ID Path**: collapsible.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * Primary content in *Collapsible → Items*
 */
export interface CollapsibleSliceDefaultItem {
	/**
	 * Title field in *Collapsible → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: collapsible.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Text field in *Collapsible → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: collapsible.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
	
	/**
	 * Image field in *Collapsible → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: collapsible.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * File Title field in *Collapsible → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: collapsible.items[].file_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	file_title: prismic.KeyTextField;
	
	/**
	 * File field in *Collapsible → Items*
	 *
	 * - **Field Type**: Link to Media
	 * - **Placeholder**: *None*
	 * - **API ID Path**: collapsible.items[].file
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	file: prismic.LinkToMediaField;
}

/**
 * Default variation for Collapsible Slice
 *
 * - **API ID**: `default`
 * - **Description**: Collapsible
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CollapsibleSliceDefault = prismic.SharedSliceVariation<"default", Simplify<CollapsibleSliceDefaultPrimary>, Simplify<CollapsibleSliceDefaultItem>>;

/**
 * Slice variation for *Collapsible*
 */
type CollapsibleSliceVariation = CollapsibleSliceDefault

/**
 * Collapsible Shared Slice
 *
 * - **API ID**: `collapsible`
 * - **Description**: Collapsible
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CollapsibleSlice = prismic.SharedSlice<"collapsible", CollapsibleSliceVariation>;

/**
 * Primary content in *Embed → Primary*
 */
export interface EmbedSliceDefaultPrimary {
	/**
	 * Embed field in *Embed → Primary*
	 *
	 * - **Field Type**: Embed
	 * - **Placeholder**: *None*
	 * - **API ID Path**: embed.primary.embed
	 * - **Documentation**: https://prismic.io/docs/field#embed
	 */
	embed: prismic.EmbedField
}

/**
 * Default variation for Embed Slice
 *
 * - **API ID**: `default`
 * - **Description**: Embed
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedSliceDefault = prismic.SharedSliceVariation<"default", Simplify<EmbedSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Embed*
 */
type EmbedSliceVariation = EmbedSliceDefault

/**
 * Embed Shared Slice
 *
 * - **API ID**: `embed`
 * - **Description**: Embed
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EmbedSlice = prismic.SharedSlice<"embed", EmbedSliceVariation>;

/**
 * Primary content in *Image → Primary*
 */
export interface ImageSliceDefaultPrimary {
	/**
	 * Image field in *Image → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Caption field in *Image → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.primary.caption
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	caption: prismic.RichTextField;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *LogoSection → Primary*
 */
export interface LogoSectionSliceDefaultPrimary {
	/**
	 * Title field in *LogoSection → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: logo_section.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
	
	/**
	 * Text field in *LogoSection → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: logo_section.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Primary content in *LogoSection → Items*
 */
export interface LogoSectionSliceDefaultItem {
	/**
	 * Image field in *LogoSection → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: logo_section.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for LogoSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: LogoSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogoSectionSliceDefault = prismic.SharedSliceVariation<"default", Simplify<LogoSectionSliceDefaultPrimary>, Simplify<LogoSectionSliceDefaultItem>>;

/**
 * Slice variation for *LogoSection*
 */
type LogoSectionSliceVariation = LogoSectionSliceDefault

/**
 * LogoSection Shared Slice
 *
 * - **API ID**: `logo_section`
 * - **Description**: LogoSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LogoSectionSlice = prismic.SharedSlice<"logo_section", LogoSectionSliceVariation>;

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
			AgendaitemDocumentDataSlicesSlice,
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
			SettingsDocument,
			SettingsDocumentData,
			AllDocumentTypes,
			ButtonSlice,
			ButtonSliceDefaultItem,
			ButtonSliceVariation,
			ButtonSliceDefault,
			CollapsibleSlice,
			CollapsibleSliceDefaultPrimary,
			CollapsibleSliceDefaultItem,
			CollapsibleSliceVariation,
			CollapsibleSliceDefault,
			EmbedSlice,
			EmbedSliceDefaultPrimary,
			EmbedSliceVariation,
			EmbedSliceDefault,
			ImageSlice,
			ImageSliceDefaultPrimary,
			ImageSliceVariation,
			ImageSliceDefault,
			LogoSectionSlice,
			LogoSectionSliceDefaultPrimary,
			LogoSectionSliceDefaultItem,
			LogoSectionSliceVariation,
			LogoSectionSliceDefault,
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