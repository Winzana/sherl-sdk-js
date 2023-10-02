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

export interface IOption {
  id: string;
  name: string;
  items: IOptionItem[];
  required: boolean;
  multiple: boolean;
  rangeMin: number;
  rangeMax: number;
}

export interface IOptionItem {
  name: string;
  priceTaxIncluded: number;
  available: boolean;
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

export interface ISubscription {
  id: string;
  uri: string;
  name: string;
  ownerUri: string;
  consumerId: string;
  activeFrom: Date;
  activeUntil: Date;
  frequency: OfferFrequencyEnum;
  enabled: boolean;
  disabledAt: Date;
  sourceUri: string;
  offer: IOffer;
  contextUri: string;
  metadatas: { [key: string]: any };
  createdAt: Date;
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
