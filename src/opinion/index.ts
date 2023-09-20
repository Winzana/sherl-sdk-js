import { SherlClient } from '../common';
import { OpinionProvider } from './provider';
import {
  IAverage,
  IClaimOpinionInput,
  ICreateOpinionInput,
  IOpinion,
  IOpinionFilters,
  IOpinionUpdateStatusInputDto,
  OpinionStatusEnum,
} from './types';

export const opinion = (client: SherlClient) => new OpinionProvider(client);
export {
  IAverage,
  IClaimOpinionInput,
  ICreateOpinionInput,
  IOpinion,
  IOpinionFilters,
  IOpinionUpdateStatusInputDto,
  OpinionStatusEnum,
};
