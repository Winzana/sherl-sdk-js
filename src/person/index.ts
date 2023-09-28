import { SherlClient } from '../common';
import { PersonProvider } from './provider';
import {
  IPerson,
  IPersonFilters,
  GendersEnum,
  IFrequentedEstablishments,
  ILegalNoticeAcceptance,
  ILemonway,
  ILemonwayCard,
  IMangopayCard,
  IPersonRegister,
  IPersonUpdate,
  IPositionInputDto,
  IServiceTypeResonse,
  ISettings,
  IStripe,
  IStripeCard,
  IValue,
  PersonTypeEnum,
} from './types';

const person = (client: SherlClient) => new PersonProvider(client);
export {
  person,
  IPerson,
  IPersonFilters,
  GendersEnum,
  IFrequentedEstablishments,
  ILegalNoticeAcceptance,
  ILemonway,
  ILemonwayCard,
  IMangopayCard,
  IPersonRegister,
  IPersonUpdate,
  IPositionInputDto,
  IServiceTypeResonse,
  ISettings,
  IStripe,
  IStripeCard,
  IValue,
  PersonTypeEnum,
};
