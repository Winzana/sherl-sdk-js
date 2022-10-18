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

export interface IOffer {
  price: number;
  taxRate: number;
  priceTaxIncluded: number;
}

export interface IItem {
  name: string;
  priceTaxIncluded: number;
}

//******************************************************************************** ************************************************************************************ */

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

export interface IImageObject {
  id: string;
  consumerId: string;
  domain: string;
  uri: string;
  width: number;
  height: number;
  caption: IMediaObject;
  thumbnail: IImageObject;
  createdAt: Date;
}

export interface IMediaObject {
  contentUrl: string;
  description: string;
  duration: string;
  encodingFormat: string;
  size: number;
  name: string;
  id: string;
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
  is: false;
  // seo: SEO; Besoin de SEO ? Je ne l'ai pas dans mes interfaces 
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
