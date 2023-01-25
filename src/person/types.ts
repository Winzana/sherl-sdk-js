import { IGeoCoordinates, IPlace } from '../common/types';

export interface IPersonMeResponse {
  id: string;
  uri: string;
  consumerId: string;
  userId: string;
  firstName: string;
  lastName: string;
  address: IPlace;
  myAddresses: IPlace[];
  subscriptionLocation: IGeoCoordinates;
  phoneNumber: string;
  mobilePhoneNumber: string;
  faxNumber: string;
  nationality: string;
  affiliation: IOrganization;
  birthDate: Date;
  email: string;
  gender: string;
  latitude: number;
  longitude: number;
  jobTitle: string;
  enabled: boolean;
  legalNotice: ILegalNotice;
  privacyPolicy: IPrivacyPolicy;
  createdAt: Date;
  updatedAt: Date;
  picture: IImageObject;
  settings: ISettings;
  organizationFavorites: string[];
  mangopayUserId: string;
  mangopayWalletId: string;
  mangopayCards: IMangopayCard[];
  stripe: IStripe;
  lemonway: ILemonway;
  type: IPersonTypeEnum;
  frequentedEstablishments: IFrequentedEstablishments[];
  metadatas: { [key: string]: any };
  statistics: {
    lastVisit: Date;
    firstVisit: Date;
    totalVisit: number;
    amountLastOrder: number;
    amountTotalOrder: number;
    frequentedEstablishments: IFrequentedEstablishments[];
    loyalCustomer: boolean;
  };
}

export interface IConfigResponse {
  id: string;
  code: string;
  value: any;
  consumer: string;
  position: number;
  appliedTo?: string;
  isPublic?: boolean;
}

export interface IImageObject {
  id?: string;
  consumerId?: string;
  domain?: string;
  uri?: string;
  width?: number;
  height?: number;
  caption: IMediaObject;
  thumbnail?: IImageObject;
  createdAt?: Date;
}

export interface IMediaObject {
  contentUrl: string;
  description?: string;
  duration?: string;
  encodingFormat: string;
  size?: number;
  name: string;
  id: string;
}

export interface IPersonTypeEnum {
  frequentedEstablishment: {
    organizationId: string;
    isCustomer: boolean;
  };
}

export interface IMangopayCard {
  ExpirationDate: string;
  Alias: string;
  CardType: string;
  CardProvider: string;
  Country: string;
  Product: string;
  BankCode: string;
  Active: boolean;
  Currency: string;
  Validity: string;
  Id: string;
  Tag: string | null;
  CreationDate: number;
  Fingerprint: string;
  default: boolean;
}

export interface ILemonway {
  customerId: string;
  cards: ILemonwayCard[];
}

export interface IStripe {
  customerId: string;
  cards: IStripeCard[];
}

export interface ILemonwayCard {
  id: number;
  transactionId: number;
  is3DS: boolean;
  country: string;
  authorizationNumber: string;
  maskedNumber: string;
  type: string;
  default: boolean;
  webKitToken: string;
}

export interface IStripeCard {
  id: string;
  object: string;
  address_city: string;
  address_country: string;
  address_line1: string;
  address_line1_check: string;
  address_line2: string;
  address_state: string;
  address_zip: string;
  address_zip_check: string;
  brand: string;
  country: string;
  customer: string;
  cvc_check: string;
  dynamic_last4: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  last4: string;
  metadata: object;
  name: string;
  tokenization_method: string;
  default: boolean;
}

export interface IFrequentedEstablishments {
  organizationId: string;
  organizationName: string;
  firstVisit: Date;
  lastVisit: Date;
  isCustomer: boolean;
}

export interface IPrivacyPolicy {
  version: string;
  dateOfAcceptance: Date;
}

export interface ISettings {
  notifications: {
    emailEnable: boolean;
    smsEnable: boolean;
    pushEnable: boolean;
  };
}

interface ILegalNotice {
  version: string;
  dateOfAcceptance: Date;
}

interface IOrganization {
  location: ILocation;
  types: string[];
  id: string;
  employees: any[];
  founders: any[];
  knowsLanguage: any[];
  openingHoursSpecification: IOpeningHoursSpecification[];
  photos: any[];
  serviceType: IServiceTypeResonse[];
  isPaymentAllowed: boolean;
  enabled: boolean;
  uri: string;
  consumerId: string;
  legalName: string;
}

export interface IServiceTypeResonse {
  parent: null;
  childrens: any[];
  id: string;
  values: IValue[];
  uri: string;
  code: string;
  createdAt: string;
}

export interface IValue {
  language: string;
  value: string;
  createdAt: string;
}

export interface ILocation {
  id: string;
  country: string;
  locality: string;
  region: string;
  postalCode: string;
  streetAddress: string;
  latitude: string;
  longitude: string;
}

export interface IOpeningHoursSpecification {
  id: string;
  dayOfWeek: string;
  closes: Date;
  opens: Date;
  validFrom: Date;
  validThrough: Date;
}

export interface ILemonwayCard {
  id: number;
  transactionId: number;
  is3DS: boolean;
  country: string;
  authorizationNumber: string;
  maskedNumber: string;
  type: string;
  default: boolean;
  webKitToken: string;
}
