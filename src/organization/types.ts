import { ICalendarEvent, IDays, IOpeningHoursSpecification } from '../calendar';
import { PaginationFilters } from '../common';
import { IImageObject } from '../media';
import { IPerson } from '../person';
import { IPlace, IGeoCoordinates, IAddress } from '../place/types';

import { IQuotas } from '../quotas/types';
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

export interface IPersonConfigValue {
  code: string;
  value: any;
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

// #region - KYC

export interface IKYCDocument {
  id: string;
  uri?: string;
  organizationId: string;
  consumerId?: string;
  type: KYCDocumentTypeEnum;
  tag?: string;
  originId?: string;
  creationDate?: string;
  processedDate?: string;
  status: KYCDocumentStatusEnum;
  refusedReasonType?: KYCDocumentRefusedReasonTypEnum;
  refusedReasonMessage?: string;
  media?: IImageObject;
  createdAt: Date;
  updatedAt?: Date;
}

export enum KYCDocumentStatusEnum {
  CREATED = 'CREATED',
  VALIDATION_ASKED = 'VALIDATION_ASKED',
  VALIDATED = 'VALIDATED',
  REFUSED = 'REFUSED',
}

export enum KYCDocumentRefusedReasonTypEnum {
  DOCUMENT_UNREADABLE,
  DOCUMENT_NOT_ACCEPTED,
  DOCUMENT_HAS_EXPIRED,
  DOCUMENT_INCOMPLETE,
  DOCUMENT_MISSING,
  DOCUMENT_DO_NOT_MATCH_USER_DATA,
  DOCUMENT_DO_NOT_MATCH_ACCOUNT_DATA,
  SPECIFIC_CASE,
  DOCUMENT_FALSIFIED,
  UNDERAGE_PERSON,
}

export interface IAddKYCDocument {
  id: string;
  type: KYCDocumentTypeEnum;
  media: IImageObject;
}

export enum KYCDocumentTypeEnum {
  IDENTITY_PROOF = 'IDENTITY_PROOF',
  REGISTRATION_PROOF = 'REGISTRATION_PROOF',
  ARTICLES_OF_ASSOCIATION = 'ARTICLES_OF_ASSOCIATION',
  ADDRESS_PROOF = 'ADDRESS_PROOF',
  IDENTITY_PROOF_PASSPORT = 'IDENTITY_PROOF_PASSPORT',
  IDENTITY_PROOF_OTHER_DOCUMENT = 'IDENTITY_PROOF_OTHER_DOCUMENT',
}

export interface IUpdateDocument {
  media: {
    id: string;
    uri: string;
    caption: {
      id: string;
      size: number;
      contentUrl: string;
      description: string;
      name: string;
      encodingFormat: string;
    };
    domain: string;
  };
}

// #endregion

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

export interface ICommunicationInputDto {
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

export interface IBackgroundImage {
  backgroundImage: File;
}

export type IMediaCreateInputDto = Pick<
  IImageObject,
  'id' | 'uri' | 'width' | 'height' | 'caption' | 'thumbnail'
>;
export interface IOpeningHoursSpecificationRequest {
  id?: string;
  dayOfWeek: string;
  closes: string;
  opens: string;
  validFrom: string;
  validThrough: string;
}

export interface IEmployeeInputDto {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ICreateFounderRequest {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
}

export interface IUpdateFounderRequest {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IAddressRequest extends IAddress {
  originId: string;
  latitude: number;
  longitude: number;
  organizationId: string;
}

export interface ICreateOrganizationInputDto {
  id: string;
  legalName: string;
  siret: string;
  createdAt: string;
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

export interface IRegisterOrganizationRequest {
  sponsoredByCode: string;
  organization: {
    id: string;
    legalName: string;
    siret: string;
    location: {
      id: string;
      uri: string;
      country: string;
      locality: string;
      region: string;
      department: string;
      types: [string];
      postalCode: string;
      streetAddress: string;
      complementaryStreetAddress: string;
      name: string;
      originId: string;
      latitude: number;
      longitude: number;
      consumerId: string;
      createdAt: string;
      updatedAt: string;
      type: string;
      isDefault: true;
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
  user: {
    password: string;
  };
}

export interface IRegisterOrganizationToPerson {
  organization: {
    id: string;
    legalName: string;
    location: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
      latitude: number;
      longitude: number;
    };
  };
  person: {
    firstName: string;
    lastName: string;
    address: {
      id: string;
      country: string;
      locality: string;
      region: string;
      postalCode: string;
      streetAddress: string;
    };
    mobilePhoneNumber: string;
    nationality: string;
    birthDate: string;
    email: string;
    gender: string;
    settings: {
      notifications: {
        smsEnable: boolean;
        emailEnable: boolean;
        pushEnable: boolean;
      };
    };
  };
}

export interface ISuggestOrganizationRequest {
  id: string;
  legalName: string;
  siret: number;
  location: {
    id: string;
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    latitude: number;
    longitude: number;
  };
  serviceType: [
    {
      id: string;
      uri: string;
      code: string;
      values: [
        {
          language: string;
          value: string;
          createdAt: string;
        },
      ];
      createdAt: string;
    },
    {
      id: string;
      uri: string;
      code: string;
      values: [
        {
          language: string;
          value: string;
          createdAt: string;
        },
      ];
      createdAt: string;
    },
  ];
}

export interface IUpdateOrganizationRequest {
  location: {
    country: string;
    locality: string;
    region: string;
    postalCode: string;
    streetAddress: string;
    latitude: number;
    longitude: number;
  };
}

export interface IIsPublicOrganization {
  id: string;
  isPublic: boolean;
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
