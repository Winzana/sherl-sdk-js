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
  schedules: Schedules;
}
export interface Schedules {
  allowedFromDate: string;
  allowedUntilDate: string;
}
export interface IClaim {
  replies: any[];
  schedules: Schedules;
  id: string;
  issueMessage: string;
  issueTitle: string;
  personId: string;
  orderId: string;
  createdAt: string;
  uri: string;
  consumerId: string;
  status: string;
  person?: IPerson;
  order?: IOrderResponse;
}
export interface IClaimUpdate {
  status: string;
}
