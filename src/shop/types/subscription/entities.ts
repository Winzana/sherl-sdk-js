import { IOffer, OfferFrequencyEnum } from '../product/entities';

export interface ISubscriptionFindOnByDto {
  id?: string;
  uri?: string;
  name?: string;
  ownerUri?: string;
  consumerId?: string;
  actionFrom?: string;
  activeUntil?: string;
  activeFor?: string;
  enabled?: boolean;
  sourceUri?: string;
}

export interface ISubscription {
  id: string;
  uri: string;
  name: string;
  ownerUri: string;
  consumerId: string;
  activeFrom?: Date;
  activeUntil?: Date;
  frequency?: OfferFrequencyEnum;
  status?: SubscriptionStatusEnum;
  enabled: boolean;
  disabledAt: Date;
  sourceUri: string;
  offer?: IOffer;
  contextUri: string;
  metadatas: { [key: string]: any };
  createdAt: Date;
}

export enum SubscriptionStatusEnum {
  NEW = 0,
  ACTIVE = 100,
  FINISHED = 200,
  ERROR = 300,
}
