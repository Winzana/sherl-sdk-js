import {
  IGeoCoordinates,
  PaginationFilters,
  IOpeningHoursSpecification,
} from '../common';
import { IImageObject } from '../media';
import { IPerson } from '../person';
import { IPlace } from '../place/types';
import {
  ICategoryResponse,
  IProductResponse,
  ISubscription,
  IWallet,
} from '../shop/types';

export interface IOrganizationResponse {
  id: string;
  uri: string;
  sponsorshipCode: string;
  sponsoredByCode: string;
  sponsoredByUri: string;
  slug: string;
  consumerId: string;
  legalName: string;
  location: IPlace;
  myAddresses: IGeoCoordinates[];
  aggregateRating: number;
  subOrganizations: IOrganizationResponse[];
  email: string;
  employees: IEmployee[];
  wallet: IWallet;
  isPaymentAllowed: boolean;
  enabled: boolean;
  faxNumber: string;
  phoneNumber: string;
  website: string;
  founders: IFounder[];
  foundingDate: Date;
  knowsLanguage: ITaxonomy[];
  logo: IImageObject;
  backgroundImage: IImageObject;
  numberOfEmployees: number;
  parentOrganization: IOrganizationResponse;
  slogan: string;
  siret: number;
  smokingAllowed: boolean;
  openNow: boolean;
  openingHoursSpecification: IOpeningHoursSpecification[];
  isAccessibleForFree: boolean;
  isComingSoon: boolean;
  photos: IImageObject[];
  serviceType: ITaxonomy[];
  types: string[];
  advertisingText: string;
  communication: IOrganizationCommunication;
  geopoint: string;
  createdAt: Date;
  updatedAt: Date;
  metadatas: { [key: string]: any };
  categories: ICategoryResponse[];
  products: IProductResponse[];
  events: ICalendarEvent[];
  isRoaming: boolean;
  is: boolean;
  calendarId: string;
  opinion: number;
  opinionCount: number;
  blackListPersons: string[];
  thirdParty: {
    facebook: {
      accessToken: string;
      longLivedUserAccessToken: string;
      expirationDate: Date;
      userID: string;
    };
  };
  statistics: {
    firstVisit: Date;
    totalOrder: number;
    amountTotalOrder: number;
    subscription: ISubscription;
    opinion: number;
  };
  quotas: { [key: string]: IQuotas };
  configs: IPersonConfigValue[];
  displayed: {
    actualityContent: string;
    actualityTitle: string;
    backgroundImg: string;
    logoImg: string;
    highlightImg: string;
    city: string;
    id: string;
    isBarService: boolean;
    isOpen: boolean;
    latitude: number;
    longitude: number;
    name: string;
    position: string;
    type: string;
    weekTime: IDays[];
    metadatas: any;
  };
}

export interface ICalendarEvent {
  id?: string;
  uri?: string;
  aboutUri?: string;
  calendarUri?: string;
  startDate?: Date;
  endDate?: Date;
  location?: IGeoCoordinates;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPersonConfigValue {
  code: string;
  value: any;
}

// TODO Move into quotas product
export interface IQuotas {
  id: string;
  uri: string;
  consumerId: string;
  type: CommunicationTypeEnum;
  amount: number;
  allowNegative: boolean;
  ownerUri: string; // Person or organization associated to Quota wallet
  sources: IQuotaSource[]; // Sources for recurrent provisioning
  createdAt: Date;
  updatedAt: Date;
}

export enum CommunicationTypeEnum {
  MESSAGING = 'MESSAGING',
  TRANSACTIONAL = 'TRANSACTIONAL',
}

export enum CommunicationChannelEnum {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  WHATSAPP = 'WHATSAPP',
  FACEBOOK = 'FACEBOOK',
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM',
  TELEGRAM = 'TELEGRAM',
}

// TODO Move into quotas product
export interface IQuotaSource {
  id: string;
  uri?: string;
  lastApply: Date;
  nextApply: Date;
  amount: number;
  remaining: number;
  createdFrom?: string;
  createdBy?: string;
  createdAt?: Date;
  quotaId: string;
}

export interface ITaxonomy {
  id: string;
  uri: string;
  code: string;
  values: ITaxonomyValue[];
  parent?: ITaxonomy;
  childrens?: ITaxonomy[];
  createdAt: Date;
  updatedAt?: Date;
}

export interface ITaxonomyValue {
  language: string;
  value: string;
  createdAt: Date;
  updatedAt?: Date;
}

// TODO move to calendar types
export interface IDays {
  closed: boolean;
  day: string;
  morningTime: string;
  nightTime: string;
}

export interface IOrganizationCommunication {
  title: string;
  message: string;
  icon: string;
}

export interface IFounder extends IPerson {
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
}

export interface IEmployee extends IPerson {
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IAddRibBody {
  iban: string;
  bic: string;
}

export interface IOrganizationDocumentsResponse {
  bic: string;
  iban: string;
  id: string;
  ibanId: string;
  status: string;
}

export interface OrganizationFiltersDto extends PaginationFilters {
  id?: string;
  slug?: string;
  sponsorshipCode?: string;
  ids?: string[];
  q?: string;
  legalName?: string;
  location?: IPlace;
  latitude?: number;
  longitude?: number;
  uri?: string;
  distance?: string;
  types?: string[];
  serviceTypes?: string[];
  enabled?: string;
  isPublic?: boolean;
  categoryUri?: string;
  productUri?: string;
  productName?: string;
  deliveryQuery?: string;
  day?: string;
  hour?: string;
  isRoaming?: string;
  facetted?: string;
  analytics?: string;
  opinion?: string[];
  price?: string[];
  category?: string[];
  subCategory?: string[];
  noBind?: boolean;
  sort?: {
    field: string;
    order: string;
  };
}
