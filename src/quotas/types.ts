import { CommunicationTypeEnum } from '../communication';

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
