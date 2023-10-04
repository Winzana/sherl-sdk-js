import { PaginationFilters } from '../../../common';
import { IImageObject } from '../../../media';

export interface ICategoryResponse {
  id: string;
  uri: string;
  taxeValue: number;
  consumerId: string;
  parentUri: string;
  name: string;
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  subCategories: ICategoryResponse[];
}

export interface IProductResponse {
  isEnable: boolean;
  id: string;
  uri: string;
  consumerId: string;
  name: string;
  slogan: string;
  description: string;
  categoryUri: string;
  offers: IOffer[];
  metadatas: IMetadatas;
  options: IOption[];
  organizationUri: string;
  createdAt: string;
  updatedAt: string;
  category: null;
}

export interface IMetadatas {
  degreeOfAlcohol: string;
}

export interface IItem {
  name: string;
  priceTaxIncluded: number;
}

export interface IPublicProductResponse {
  id: string;
  uri: string;
  consumerId: string;
  type: ShopProductTypeEnum;
  parentUri: string;
  parent: IPublicProductResponse;
  name: string;
  slug: string;
  slogan: string;
  description: string;
  categoryUri: string;
  categoryUris: string[];
  category: IPublicCategoryResponse;
  categories: IPublicCategoryResponse[];
  isEnable: boolean;
  offers: IOffer[];
  metadatas: any;
  options: IOption[];
  organizationUri: string;
  isCustom: boolean;
  photos: IImageObject[];
  restrictions: { [key: string]: string[] };
  createdAt: Date;
  updatedAt: Date;
}

export interface IShopProductOptionCreateInputDto {
  id: string;
  name: string;
  items?: IShopProductOptionItemCreateInputDto[];
  required?: boolean;
  rangeMin: number;
  enabled?: boolean;
  translations?: IProductOptionItemTranslationDto[];
  multiple?: boolean;
}

export interface IShopProductOptionItemCreateInputDto {
  name: string;
  priceTaxIncluded: number;
  enabled: boolean;
}

export interface IOption {
  id: string;
  name: string;
  items?: IOptionItem[];
  required: boolean;
  multiple: boolean;
  rangeMin: number;
  rangeMax?: number;
  enalbed?: boolean;
  translations?: IProductOptionItemTranslationDto[];
}

export interface IOptionItem {
  name: string;
  priceTaxIncluded: number;
  available: boolean;
  enabled: boolean;
  translations?: IProductOptionItemTranslationDto[];
}

export interface IProductOptionItemTranslationDto {
  lang: string;
  name?: string;
}

export interface IOffer {
  priceDiscount: number;
  price: number;
  priceTaxIncluded: number;
  taxRate: number;
  frequency: OfferFrequencyEnum;
}

export enum OfferFrequencyEnum {
  ONCE = 'once',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export interface IPublicCategoryResponse {
  id: string;
  uri: string;
  consumerId: string;
  parentUri: string;
  globalUri: string;
  parent: IPublicCategoryResponse;
  color: string;
  name: string;
  slug: string;
  taxeValue: number;
  position: number;
  organizationUri: string;
  subCategories: IPublicCategoryResponse[];
  createdAt: Date;
  updatedAt: Date;
  aggCategory: string;
  is: boolean;
}

export enum ShopProductTypeEnum {
  CREDIT = 'CREDIT',
  DEFAULT = 'DEFAULT',
  ROOM = 'ROOM',
  TIP = 'TIP',
  SERVICE = 'SERVICE',
  PLAN = 'PLAN',
  QUOTA = 'QUOTA',
  REFUND = 'REFUND', // Un avoir
}

export interface IProductFindByDto extends PaginationFilters {
  ids?: string[];
  externalIds?: string[];
  excludedExternalIds?: string[];
  externalIdentifier?: string;
  uri?: string;
  versionNumber?: number;
  slug?: string;
  parentUri?: string;
  organizationUri?: string;
  organizationSlug?: string;
  id?: string;
  name?: string;
  categoryUri?: string;
  categoryUris?: string[];
  consumerId?: string;
  q?: string;
  isEnable?: boolean;
  languages?: string[];
  placeForward?: boolean;
  strictPlaceForward?: boolean;
  geopoint?: string;
  distance?: number;
  withinHours?: boolean;
  startDate?: string;
  endDate?: string;
  displayAllVersion?: boolean;
  includeDeleted?: boolean;
  isUpdatedByHuman?: boolean;
  tag?: ProductTags;
  tags?: number;
  displayMode?: ProductDisplayMode;
  type?: ProductTypeEnum;
  noBind?: boolean;
  uriOfPanels?: string[];
  panel?: string;
}

export enum ProductTags {
  BACK_OFFICE = 'BACK_OFFICE',
  BACK_OFFICE_RESYNC = 'BACK_OFFICE_RESYNC',
}

export enum ProductDisplayMode {
  DEFAULT = 'default',
  LIST = 'list',
  MAP = 'map',
}

export enum ProductTypeEnum {
  CREDIT = 'CREDIT',
  DEFAULT = 'DEFAULT',
  ROOM = 'ROOM',
  TIP = 'TIP',
  SERVICE = 'SERVICE',
  PLAN = 'PLAN',
  QUOTA = 'QUOTA',
  REFUND = 'REFUND',
  EVENT = 'EVENT',
}

export interface IPublicCategoryAndSubCategoryFindByDto {
  q?: string;
  organizationSlug?: string;
  organizationId?: string;
  organizationUri?: string;
  depth?: number;
}

export interface IShopProductCategoryFindByQuery {
  organizationId?: string;
  depth?: number;
}

export interface IAddCommentOnProductDto {
  productId: string;
  content: string;
}

export interface IFindProductCommentsInputDto extends PaginationFilters {
  productId?: string;
  personId?: string;
  organizationUri?: string;
  sort?: string;
}

export interface IComment {
  id: string;
  uri: string;
  consumerId: string;
  productId?: string;
  personId?: string;
  personName?: string;
  organizationUri?: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IShopProductCategoryCreateInputDto {
  id: string;
  globalUri?: string;
  name?: string;
  color?: string;
  taxeValue: number;
  position?: number;
  seo?: ISEO;
  isPublic?: boolean;
}

export interface ISEO {
  title?: string;
  description?: string;
  keywords?: string;
  others?: { [key: string]: string };
}

export interface IShopProductSubCategoryCreateInputDto {
  id: string;
  globalUri?: string;
  color?: string;
  name?: string;
  seo?: ISEO;
  position: number;
}
