import { IGeoPoint, PaginationFilters } from '../common';
import { IOrganizationResponse } from '../organization';
import { IUser } from '../user/types';

export interface IAnalyticResponse {
  id: string;
  key: string;
  value: number;
  number: number;
  metadata: { [key: string]: any };
}

export interface IAnalyticsInputBaseDto {
  beginDate?: string;
  endDate?: string;
  userId?: string;
  limit?: number;
}

export interface ICAAnalyticsInputDto extends IAnalyticsInputBaseDto {
  organizationId?: string;
  average?: boolean;
}

export interface IProductAnalyticsInputDto extends IAnalyticsInputBaseDto {
  productId?: string;
}

export interface INotificationsAnalyticsInputDto {
  beginDate?: string;
  endDate?: string;
  organizationId?: string;
}

export interface IAnalyticsInputDto {
  organizationId?: string;
  userId?: string;
  sort?: string;
}

export interface IAnalyticsFindBIInputDto {
  index?: string;
  filters: any;
}

export interface IAnalyticsFindByInputDto extends PaginationFilters {
  id?: string;
  action?: TraceEnum;
  objectUri?: string;
  value?: any;
  sortBy?: string;
  sortOrder?: string;
  aggregateGroupBy?: string;
  aggregateSum?: string;
}

export interface ITrace {
  id: string;
  consumerId?: string;
  action: TraceEnum;
  user: IUser;
  session?: ISession;
  sessionId?: string;
  value: any;
  organization?: IOrganizationResponse;
  year?: number;
  month?: number;
  day?: number;
  objectUri: string;
  latitude?: number;
  longitude?: number;
  geopoint?: string;
  createdAt?: Date;
}

export interface ISession {
  id?: string;
  uri?: string;
  ipAddress?: string;
  createdAt?: Date;
  updatedAt?: Date;
  keywords?: { [key: string]: number };
  device?: DevicesEnum;
  source?: SourcesEnum;
  location?: IGeoPoint;
  searchHistory?: ISessionSearchHistory;
  uriOfPanels?: { [key: string]: string };
  metadatas?: any;
}

export enum DevicesEnum {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

export enum SourcesEnum {
  QR = 'qr',
  SOCIAL = 'social',
  ORGANIC = 'organic',
  REFERRAL = 'referral',
  DIRECT = 'direct',
  CAMPAIGNS = 'campaigns',
}

export enum TraceEnum {
  // USER
  USER_LOGGED = 'user:logged',
  USER_LOGGED_SMS = 'user:logged:sms',
  USER_LOGGED_FACEBOOK = 'user:logged:facebook',
  USER_LOGGED_GOOGLE = 'user:logged:google',
  USER_LOGGED_EMAIL = 'user:logged:email',
  USER_LOGOUT = 'user:logout',
  USER_DETECTED = 'user:detected',
  ETL_EXTRACT_TRANSFORM_LOAD = 'etl:extract-transform-load',
  // PERSON
  PERSON_REGISTER = 'person:register',
  // ORGANIZATION
  ORGANIZATION_VIEW = 'organization:view',
  ORGANIZATION_VISITED = 'organization:visited',
  ORGANIZATION_VISITED_FIRST = 'organization:visited-first',
  ORGANIZATION_LIKED = 'organization:liked',
  // ORDER
  ORDER_FINISHED = 'order:finished',
  ORDER_FINISHED_AMOUNT = 'order:finished:amount',
  ORDER_FINISHED_AMOUNT_COMMISSION = 'order:finished:amount:commission',
  ORDER_FINISHED_AMOUNT_TO_ORGANIZATION = 'order:finished:amount:to-organization',
  ORDER_FINISHED_PRODUCT = 'order:finished:product',
  ORDER_FINISHED_PRODUCT_AMOUNT = 'order:finished:product:amount',
  // PRODUCT
  PRODUCT_ADD_TO_BASKET = 'product:add-to-basket',
  PRODUCT_LIKED = 'product:liked',
  PRODUCT_VIEWS = 'product:views',
  // NOTIFICATION
  NOTIFICATION_EMAIL_SENT = 'notification:email-sent',
  NOTIFICATION_SMS_SENT = 'notification:sms-sent',
  // ANALYTICS
  WEBSITE_PAGE_CHANGE = 'bi:website:page:change',
}

export interface ISessionSearchHistory {
  keywords?: {
    [key: string]: {
      value: string;
      count: number;
      createdAt: Date;
      updatedAt?: Date;
    };
  };
  categoryUris?: {
    [key: string]: {
      value: string;
      count: number;
      createdAt: Date;
      updatedAt?: Date;
    };
  };
  languages?: {
    [key: string]: {
      value: string;
      count: number;
      createdAt: Date;
      updatedAt?: Date;
    };
  };
  geopoints?: {
    [key: string]: {
      latitude: string;
      longitude: string;
      value: string;
      count: number;
      createdAt: Date;
      updatedAt?: Date;
    };
  };
  metadatas?: {
    [key: string]: {
      value: string;
      count: number;
      createdAt: Date;
      updatedAt?: Date;
    };
  };
  fulltext?: {
    [key: string]: {
      value: string;
      count: number;
      createdAt: Date;
      updatedAt?: Date;
    };
  };
}
