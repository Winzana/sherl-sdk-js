import { IPlace, IGeoCoordinates, IAddress } from '../common/types';
import { IConfig } from '../config/types';
import {
  IPersonMeResponse,
  IOpeningHoursSpecification,
  IImageObject,
} from '../person/types';
import {
  ICategoryResponse,
  IProductResponse,
} from '../shop/types/product/types';

export interface IOrganizationResponse extends IModel {
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

export interface IModel {
  toJson(): any;
}

export interface IDays {
  closed: boolean;
  day: string;
  morningTime: string;
  nightTime: string;
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

export interface IOrganizationCommunication {
  title: string;
  message: string;
  icon: string;
}

export interface IFounder extends IPersonMeResponse {
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
}

export interface IWallet {
  userId: string;
  walletId: string;
}

export interface IEmployee extends IPersonMeResponse, IModel {
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IAddDocument {
  id: string;
  type: object;
  media: object;
}

export interface IUpdateDocument {
  media: object;
}

export interface IDocument {
  id: string;
  type: string;
  media: IMedia;
}

export interface IMedia {
  id: string;
  uri: string;
  caption: ICaption;
  domain: string;
}

export interface ICaption {
  id: string;
  size: number;
  contentUrl: string;
  description: string;
  name: string;
  encodingFormat: string;
}

export interface IAddRib {
  iban: string;
  bic: string;
}

export interface IRib {
  iban: string;
  bic: string;
}

export interface ISetCommunication extends ICommunication {
  organizationId: string;
}

export interface ICommunication {
  title: string;
  message: string;
  icon: string;
}

export interface ILogo {
  logo: File;
}

export interface ILogoRequest extends ILogo {
  organizationId: string;
  logoId: string;
}

export interface ILogoResponse {}

export interface IDeleteBackgroundImageResponse {}

export interface ICreateBackgroundImageResponse {}

export interface ICreateBackgroundImageFromMediaResponse {}

export interface IBackgroundImage {
  backgroundImage: File;
}

export interface IBackgroundImageFromMediaRequest
  extends IBackgroundImageFromMedia {
  organizationId: string;
}

export interface IBackgroundImageFromMedia {
  thumbnail: {
    caption: {
      id: string;
      size: number;
      contentUrl: string;
      description: string;
      name: string;
      encodingFormat: string;
    };
    width: number;
    height: number;
  };
  id: string;
  width: number;
  height: number;
  caption: {
    id: string;
    size: number;
    contentUrl: string;
    description: string;
    name: string;
    encodingFormat: string;
  };
  uri: string;
  domain: string;
  consumerId: string;
}

export interface IPicture {
  picture: File;
}

export interface IPictureFromMedia {
  thumbnail: {
    caption: {
      id: string;
      size: number;
      contentUrl: string;
      description: string;
      name: string;
      encodingFormat: string;
    };
    width: number;
    height: number;
  };
  _id: string;
  id: string;
  width: number;
  height: number;
  caption: {
    id: string;
    size: number;
    contentUrl: string;
    description: string;
    name: string;
    encodingFormat: string;
  };
  uri: string;
  domain: string;
  consumerId: string;
}

export interface ICreatePictureResponse {}

export interface ICreatePictureFromMediaResponse {}

export interface IDeletePictureResponse {}

export interface IOpeningHoursSpecificationRequest
  extends IOpeningHoursSpecification {
  organizationId: string;
}

export interface ICreateOpeningHoursSpecificationResponse {}

export interface IUpdateOpeningHoursSpecificationResponse {}

export interface IDeleteOpeningHoursSpecificationResponse {}

export interface IEmployeeRequest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ICreateEmployeeResponse {
  id: string;
  uri: string;
  consumerId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUpdateEmployeeRequest {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUpdateEmployeeResponse {}

export interface IDeleteEmployeeResponse {}

export interface IFounderRequest extends IFounder {
  organizationId: string;
}

export interface ICreateFounderResponse {}

export interface IUpdateFounderResponse {}

export interface IDeleteFounderResponse {}

export interface IAddressRequest extends IAddress {
  originId: string;
  latitude: number;
  longitude: number;
  organizationId: string;
}

export interface IAddAddressResponse {}

export interface IUpdateAddressResponse {}

export interface IDeleteAddressResponse {}

export interface IOrganization extends IModel {
  id: string;
  legalName: string;
  createdAt: string;
  location: IAddressRequest;
  siret: number;
}

export interface IRegisterOrganizationRequest {
  id: string;
  legalName: string;
  siret: string;
  location: {
    id: string;
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    uri: string;
    createdAt: string;
    department: string;
    complementaryStreetAddress: string;
    name: string;
    originId: string;
    latitude: number;
    longitude: number;
  };
}

export interface IRegisterOrganizationToPerson {
  sponsoredByCode: string;
  organization: {
    id: string;
    legalName: string;
    siret: string;
    location: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
      uri: string;
      createdAt: string;
      department: string;
      complementaryStreetAddress: string;
      name: string;
      originId: string;
      latitude: number;
      longitude: number;
    };
  };
  person: {
    id: string;
    firstName: string;
    lastName: string;
    address: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
      uri: string;
      createdAt: string;
      department: string;
      complementaryStreetAddress: string;
      name: string;
      originId: string;
      latitude: number;
      longitude: number;
    };
    mobilePhoneNumber: string;
    nationality: string;
    latitude: number;
    longitude: number;
    birthDate: string;
    email: string;
    gender: string;
    jobTitle: string;
  };
}

export interface ISuggestOrganizationRequest {
  id: string;
  legalName: string;
  siret: string;
  location: {
    id: string;
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    uri: string;
    createdAt: string;
    department: string;
    complementaryStreetAddress: string;
    name: string;
    originId: string;
    latitude: number;
    longitude: number;
  };
}

export interface IUpdateOrganizationRequest {
  legalName: string;
  location: {
    id: string;
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    uri: string;
    createdAt: string;
    department: string;
    complementaryStreetAddress: string;
    name: string;
    originId: string;
    latitude: 0;
    longitude: 0;
  };
  enabled: true;
  isPublic: true;
  isComingSoon: true;
  metadatas: object;
  openingHoursSpecification: Array<string>;
  thirdParty: object;
}

export interface IUpdateIsPublicOrganizationRequest {
  id: string;
  isPublic: boolean;
}

export interface IEnableRoamingResponse {}

export interface IEnableRoamingRequest {
  id: string;
}

export interface IDisableRoamingResponse {}

export interface IDisableRoamingRequest {
  id: string;
}

export interface IUpdateThirdPartyRequest {
  id: string;
  thirdParty: {
    facebook: {
      accessToken: string;
      userID: string;
    };
  };
  metadatas: {
    isItinerant: string;
  };
}

export interface IThirdPartyResponse {}

export interface ITemporarySuspendOrganizationServiceRequest {}

// //old
// export interface IOrganizationResponse {
//   isPaymentAllowed: boolean;
//   enabled: boolean;
//   metadatas : IMetadatasResponse
//   quotas: IQuotasResponse
//   configs: [];
//   id: string;
//   uri: string;
//   sponsorshipCode: string;
//   consumerId: string;
//   createdAt: string;
//   updatedAt: string;
//   slug: string;
//   is boolean;
//   legalName: string;
//   location: ILocationResponse;
//   myAddresses: IMyAddressResponse;
//   employees: [];
//   wallet: IWalletResponse;
//   founders: IFoundersResponse;
//   knowsLanguage: []
//   logo: ILogoResponse;
//   backgroundImage: IThumbnailResponse;
//   slogan: string;
//   siret: number;
//   openingHoursSpecification: [];
//   photos: [];
//   serviceType: [];
//   types: []; ////////// test
//   blackListPersons: [];
//   isRoaming: boolean;
//   thirdParty: IThirdPartyResponse;
//   geopoint: string;
//   displayed: IDisplayedResponse;
//   statistics: IStatisticsResponse;
// }

// export interface ILogoResponse {
//   thumbnail: IThumbnailResponse;
//   _id: string;
//   id: string;
//   uri: string;
//   width: number;
//   height: number;
//   caption: ICaptionResponse;
//   domain: string;
//   consumerId: string;
// }

// export interface ICaptionResponse {
//   id: string;
//   size: number;
//   contentUrl: string;
//   description: string;
//   name: string;
//   encodingFormat: string;
// }

// export interface IThumbnailResponse {
//   caption: ICaptionResponse;
//   width: number;
//   height: number;
// }

// export interface IStatisticsResponse {
//   firstVisit: string;
//   totalOrder: number;
//   amountTotalOrder: number;
//   subscription: ISubscriptionResponse
//   opinion: undefined; /////////////
//   opinionCount: number;
// }

// export interface ISubscriptionResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   name: string;
//   ownerUri: string;
//   activeFrom: string;
//   activeUntil: string;
//   enabled: boolean;
//   frequency: string;
//   sourceUri: string;
//   contextUri: string;
//   metadatas: IMetadatasSubscriptionResponse
//   offer: IOfferResponse
// }

// export interface IOfferResponse {
//   price: number;
//   taxRate: number;
//   priceTaxIncluded: number;
//   frequency: string;
// }

// export interface IMetadatasSubscriptionResponse {
//   package: string;
//   title: string;
//   content: []; /////////////
//   isExactPrice: boolean;
//   trialPeriod: boolean;
//   id: string;
//   monthAmount: number;
//   yearAmount: number;
//   actions: IActionsResponse[]
//   profileUri: string;
// }

// export interface IActionsResponse {
//   type: string;
//   frequency: string;
//   quotaType: string;
//   amount: number;
// }

// export interface IDisplayedResponse {
//   backgroundImg: string;
//   highlightImg: string;
//   logoImg: string;
//   actualityContent: undefined; ///////
//   actualityTitle: undefined;  ///////
//   city: string;
//   id: string;
//   isBarService: boolean;
//   isOpen: boolean;
//   latitude: number;
//   longitude: number;
//   name: string;
//   position: string;
//   type: string;
//   weekTime: [];
//   metadatas: IMetadatasResponse
// }

// export interface IThirdPartyResponse {
//   facebook: IFacebookResponse;
// }

// export interface IFacebookResponse {
//   accessToken: string;
//   userID: string;
//   longLivedUserAccessToken: string;
//   expirationDate: string;
// }

// export interface IFoundersResponse {
//   _id: string;
//   id: string;
//   uri: string;
//   consumerId: string;
//   firstName: string;
//   lastName: string;
//   birthDate: string;
//   email: string;
// }

// export interface IWalletResponse {
//   userId: string;
//   walletId: string;
// }

// export interface ILocationResponse {
//   types: [];
//   _id: string;
//   id: string;
//   uri: string;
//   createdAt: string;
//   country: string;
//   locality: string;
//   region: string;
//   department: string;
//   postalCode: string;
//   streetAddress: string;
//   complementaryStreetAddress: string;
//   name: string;
//   originId: string;
//   latitude: number;
//   longitude: number;
// }

// export interface IMyAddressResponse {
//   types: [];
//   _id: string;
//   id: string;
//   uri: string;
//   createdAt: string;
//   country: string;
//   locality: string;
//   region: string;
//   department: string;
//   postalCode: string;
//   streetAddress: string;
//   complementaryStreetAddress: string;
//   name: string;
//     originId: string;
//     latitude: number;
//   longitude: number;
// }

// export interface IMetadatasResponse {
//   quotas: IQuotasResponse[];
//   restriction: [];
//   phoneNumber: string;
//   socials: ISocialResponse
// }

// export interface ISocialResponse {
//   linkedin: string;
//   instagram: string;
//   facebook: string;
//   snapchat: string;
// }

// export interface IQuotasResponse {
//   type: string;
//   amount: number;
//   'notification:sms': INotificationSMSResponse
//   "notification:email": INotificationSMSResponse
//   "shop:product:service": undefined ///
// }

// export interface INotificationSMSResponse {
//   id: string;
//   ownerUri: string;
//   type: string;
//   amount: number;
//   consumerId: string;
//   createdAt: string;
//   uri: string;
//   sources: ISourcesResponse[];
//   updatedAt: string;
// }

// export interface ISourcesResponse {
//   amount: number;
//   createdFrom: string;
//   id: string;
//   lastApply: string;
//   nextApply: string;
//   remaining: number;
//   uri: string;
//   createdAt: string;
// }

// /////trash
// export interface ICategoryResponse {
//   id: string;
//   uri: string;
//   taxeValue: number;
//   consumerId: string;
//   parentUri: string;
//   name: string;
//   organizationUri: string;
//   createdAt: string;
//   updatedAt: string;
//   subCategories: ICategoryResponse[];
// }

// export interface IProductResponse {
//   isEnable: boolean;
//   id: string;
//   uri: string;
//   consumerId: string;
//   name: string;
//   slogan: string;
//   description: string;
//   categoryUri: string;
//   offers: IOfferResponse[];
//   metadatas: IMetadatasResponse;
//   options: IOptionResponse[];
//   organizationUri: string;
//   createdAt: string;
//   updatedAt: string;
//   category: null;
// }

// export interface IMetadatasResponse {

// }

// export interface IOptionResponse {
//   id: string;
//   items: IItemResponse[];
//   name: string;
//   required: boolean;
//   rangeMin: number;
// }

// export interface IItemResponse {
//   name: string;
//   priceTaxIncluded: number;
// }

// //******************************************************************************** ************************************************************************************ */

// export interface IategoryWithSubResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
//   subCategories: IubCategoryResponse[];
// }

// export interface IubCategoryResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   parentUri: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
// }

// export interface IategoryResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
// }

// export interface IroductResponse {
//   isEnable: boolean;
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   updatedAt: string;
//   type: string;
//   name: string;
//   slug: string;
//   slogan: string;
//   description:string;
//   categoryUri: string;
//   categoryUris: [];
//   offers: [IOfferResponse];
//   metadatas: IMetadataResponse;
//   options: [];
//   photos: [];
//   category: ICategoryInProductResponse;

// }

// export interface IOfferResponse {
//     _id: string;
//     price: number;
//     taxRate: number;
//     priceTaxIncluded: number;
// }

// export interface IMetadataResponse {
//   quotaType: string;
//   quotaValue: number;
// }

// export interface ICategoryInProductResponse {
//   id: string;
//   uri: string;
//   consumerId: string;
//   createdAt: string;
//   updatedAt: string;
//   name: string;
//   slug: string;
//   organizationUri: string;
//   is boolean;
// }
