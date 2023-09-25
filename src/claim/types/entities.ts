import { IPerson } from '../../person';
import { IOrderResponse } from '../../shop/types';

export interface IClaimTicketFilters {
  [key: string]: any;
}

export interface IClaimCreate {
  id: string;
  personId: string;
  issueTitle: string;
  issueMessage: string;
  schedules: ISchedules;
}
export interface ISchedules {
  allowedFromDate: string;
  allowedUntilDate: string;
}
export interface IClaim {
  replies?: IClaimReply[];
  schedules: ISchedules;
  id: string;
  issueMessage: string;
  issueTitle: string;
  personId: string;
  orderId: string;
  createdAt: Date;
  updatedAt: Date;
  uri: string;
  consumerId?: string;
  status: ClaimStatusEnum;
  person?: IPerson;
  order?: IOrderResponse;
}
export interface IClaimUpdate {
  status: string;
}

export interface IClaimReply {
  content: string;
  personId: string;
  createdAt: Date;
}

export enum ClaimStatusEnum {
  NEW = 'NEW',
  READ = 'READ',
  REFUND = 'REFUND',
  CLOSED = 'CLOSED',
}
