import { PaginationFilters } from '../common';

export interface IOpinion<T, K> {
  id: string;
  opinionToUri: string;
  comment: string;
  score: number;
  opinionFromUri: string;
  createdAt: string;
  uri: string;
  status: string;
  opinionFrom: T;
  refusedComment?: string;
  opinionTo: K;
  isClaimed?: boolean;
  claimComment?: string;
  updatedAt?: string;
}

export interface ICreateOpinionInput {
  comment: string;
  id: string;
  opinionToUri: string;
  score: number;
}

export interface IClaimOpinionInput {
  claimComment: string;
}

export interface IOpinionFilters extends PaginationFilters {
  opinionToUri: string;
}

export interface IAverage {
  average: number;
  count: number;
}

export interface IOpinionUpdateStatusInputDto {
  status: OpinionStatusEnum;
  refusedComment?: string;
}

export enum OpinionStatusEnum {
  PUBLISHED = 'published',
  REFUSED = 'refused',
  IS_CLAIMED = 'is_claimed',
}
